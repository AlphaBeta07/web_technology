import { Component, OnInit } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  id: string;
  role: 'system' | 'user' | 'assistant';
  content: string;
  tokens: number;
  timestamp: Date;
  latencyMs?: number;
}

interface HistoryEntry {
  id: string;
  label: string;
  systemPrompt: string;
  userMessage: string;
  response: string;
  model: string;
  temperature: number;
  timestamp: Date;
  tokens: number;
}

interface ModelOption {
  id: string;
  label: string;
  maxTokens: number;
  provider: string;
  badge: string;
}

const MOCK_RESPONSES: string[] = [
  `Here's a thoughtful analysis of your request:\n\n**Key Points:**\n- The approach you've outlined is technically sound and follows modern best practices\n- Consider edge cases around null handling and async boundaries\n- A more scalable pattern would use dependency injection here\n\n**Code Example:**\n\`\`\`typescript\nasync function processRequest(input: string): Promise<Result> {\n  const validated = await validate(input);\n  return transform(validated);\n}\n\`\`\`\n\nThis ensures type-safety throughout the pipeline while keeping the code readable and maintainable.`,

  `Great question! Let me break this down step by step:\n\n1. **First**, identify the core problem you're solving\n2. **Then**, consider the user's mental model\n3. **Finally**, design the interface to match natural expectations\n\nThe key insight here is that users don't think in terms of data structures — they think in terms of *goals*. Your UI should reflect those goals, not the underlying implementation.\n\nWould you like me to explore any of these points further?`,

  `I've analyzed your prompt and here are my recommendations:\n\n> "Simplicity is the ultimate sophistication" — Leonardo da Vinci\n\n**Summary:**\n- Remove unnecessary complexity from the current approach\n- The token efficiency can be improved by ~30% with tighter phrasing\n- Adding few-shot examples would dramatically improve output consistency\n\n**Suggested Revision:**\nRephrase the instruction to be action-oriented rather than descriptive. This tends to produce more focused, actionable responses from language models.`,

  `Absolutely! Here's a comprehensive answer:\n\nThe concept you're asking about relates to **emergent behavior** in complex systems. When individual components follow simple rules, the aggregate can exhibit surprisingly sophisticated patterns.\n\nIn practice, this means:\n- Small prompt changes can have outsized effects on output quality\n- Temperature controls the "creativity" vs "determinism" tradeoff\n- System prompts establish a persistent behavioral frame for the model\n\nFor your use case specifically, I'd recommend starting with a temperature of **0.3–0.5** for predictable outputs, and scaling up to **0.8–1.0** for more creative generation tasks.`,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  // ── Model Options ───────────────────────────────────────
  models: ModelOption[] = [
    { id: 'gpt-4o',         label: 'GPT-4o',          maxTokens: 128000, provider: 'OpenAI',    badge: '⚡' },
    { id: 'gpt-4-turbo',    label: 'GPT-4 Turbo',     maxTokens: 128000, provider: 'OpenAI',    badge: '🚀' },
    { id: 'claude-3-opus',  label: 'Claude 3 Opus',   maxTokens: 200000, provider: 'Anthropic', badge: '🧠' },
    { id: 'claude-3-sonnet',label: 'Claude 3 Sonnet', maxTokens: 200000, provider: 'Anthropic', badge: '✨' },
    { id: 'gemini-1.5-pro', label: 'Gemini 1.5 Pro',  maxTokens: 1000000,provider: 'Google',    badge: '💎' },
    { id: 'llama-3-70b',    label: 'Llama 3 70B',     maxTokens: 8192,   provider: 'Meta',      badge: '🦙' },
  ];

  // ── State ───────────────────────────────────────────────
  selectedModel = 'gpt-4o';
  systemPrompt = 'You are a helpful, expert-level AI assistant for developers. Provide clear, concise answers with code examples when relevant.';
  userMessage = '';
  temperature = 0.7;
  maxTokens = 1024;
  topP = 1.0;
  frequencyPenalty = 0.0;
  presencePenalty = 0.0;
  streaming = true;

  messages: Message[] = [];
  history: HistoryEntry[] = [];
  isLoading = false;
  activeTab: 'chat' | 'history' | 'settings' = 'chat';
  showSidebar = true;
  streamedText = '';
  private streamInterval: any;

  // ── Prompt templates ────────────────────────────────────
  templates = [
    { label: '📝 Summarizer', system: 'You are an expert summarizer. Condense the user\'s input into clear, bullet-pointed key takeaways.' },
    { label: '💻 Code Reviewer', system: 'You are a senior software engineer. Review the provided code for bugs, performance issues, and suggest improvements with code examples.' },
    { label: '🎓 Tutor Mode', system: 'You are a patient, encouraging tutor. Explain concepts using simple language, analogies, and step-by-step guidance, then check for understanding.' },
    { label: '🔬 Research Analyst', system: 'You are a meticulous research analyst. Provide evidence-based, well-structured analysis with pros, cons, and sourced citations when possible.' },
    { label: '✍️ Creative Writer', system: 'You are a creative writer with a vivid, imaginative style. Craft engaging narratives, rich characters, and evocative descriptions.' },
    { label: '🛡️ Prompt Engineer', system: 'You are an expert prompt engineer. Analyze, critique, and suggest improvements to make AI prompts more effective, clear, and goal-oriented.' },
  ];

  // ── Computed ────────────────────────────────────────────
  get currentModel(): ModelOption {
    return this.models.find(m => m.id === this.selectedModel) ?? this.models[0];
  }

  get totalTokensUsed(): number {
    return this.messages.reduce((sum, m) => sum + m.tokens, 0);
  }

  get systemTokens(): number {
    return Math.ceil(this.systemPrompt.length / 4);
  }

  get userMessageTokens(): number {
    return Math.ceil(this.userMessage.length / 4);
  }

  get tokenPercentage(): number {
    return Math.min(100, (this.totalTokensUsed / this.currentModel.maxTokens) * 100);
  }

  get temperatureLabel(): string {
    if (this.temperature < 0.3) return 'Precise';
    if (this.temperature < 0.6) return 'Balanced';
    if (this.temperature < 0.9) return 'Creative';
    return 'Wild';
  }

  ngOnInit(): void {
    // Pre-load a welcome message
    this.messages.push({
      id: this.uid(),
      role: 'assistant',
      content: '👋 Welcome to the **AI Prompt Playground**! Configure your system prompt, select a model, adjust parameters, and send a message to test your prompt. Use the templates on the right to get started quickly.',
      tokens: 42,
      timestamp: new Date()
    });
  }

  // ── Actions ─────────────────────────────────────────────
  async sendMessage(): Promise<void> {
    if (!this.userMessage.trim() || this.isLoading) return;

    const userMsg: Message = {
      id: this.uid(),
      role: 'user',
      content: this.userMessage.trim(),
      tokens: Math.ceil(this.userMessage.length / 4),
      timestamp: new Date()
    };
    this.messages.push(userMsg);

    const sentUserMsg = this.userMessage.trim();
    this.userMessage = '';
    this.isLoading = true;
    this.streamedText = '';

    const startTime = Date.now();

    // Simulate streaming
    const responseText = MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)];
    const words = responseText.split(' ');
    let wordIdx = 0;

    await new Promise<void>(resolve => {
      this.streamInterval = setInterval(() => {
        if (wordIdx < words.length) {
          this.streamedText += (wordIdx > 0 ? ' ' : '') + words[wordIdx];
          wordIdx++;
        } else {
          clearInterval(this.streamInterval);
          resolve();
        }
      }, 30);
    });

    const latencyMs = Date.now() - startTime;
    const assistantMsg: Message = {
      id: this.uid(),
      role: 'assistant',
      content: this.streamedText,
      tokens: Math.ceil(this.streamedText.length / 4),
      timestamp: new Date(),
      latencyMs
    };
    this.messages.push(assistantMsg);
    this.streamedText = '';
    this.isLoading = false;

    // Save to history
    this.history.unshift({
      id: this.uid(),
      label: sentUserMsg.slice(0, 50) + (sentUserMsg.length > 50 ? '…' : ''),
      systemPrompt: this.systemPrompt,
      userMessage: sentUserMsg,
      response: assistantMsg.content,
      model: this.selectedModel,
      temperature: this.temperature,
      timestamp: new Date(),
      tokens: userMsg.tokens + assistantMsg.tokens
    });
  }

  applyTemplate(template: { label: string; system: string }): void {
    this.systemPrompt = template.system;
  }

  loadHistory(entry: HistoryEntry): void {
    this.systemPrompt = entry.systemPrompt;
    this.selectedModel = entry.model;
    this.temperature = entry.temperature;
    this.userMessage = entry.userMessage;
    this.activeTab = 'chat';
  }

  clearChat(): void {
    this.messages = [];
    this.streamedText = '';
  }

  clearHistory(): void {
    this.history = [];
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).catch(() => {});
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      this.sendMessage();
    }
  }

  formatMarkdown(text: string): string {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`{3}(\w*)\n([\s\S]*?)`{3}/g, '<pre><code>$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>')
      .replace(/^> (.*)/gm, '<blockquote>$1</blockquote>');
  }

  formatTime(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  private uid(): string {
    return Math.random().toString(36).slice(2, 10);
  }

  trackMsg(_: number, msg: Message) { return msg.id; }
  trackHistory(_: number, h: HistoryEntry) { return h.id; }
}
