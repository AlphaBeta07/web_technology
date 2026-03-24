// Quiz data
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
        correct: 2
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 3
    }
];

// DOM elements
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const questionNumberElement = document.getElementById('question-number');
const scoreElement = document.getElementById('score');
const feedbackElement = document.getElementById('feedback');

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let quizCompleted = false;

// Initialize quiz
function loadQuestion() {
    // Reset state
    selectedOption = null;
    nextButton.disabled = true;
    feedbackElement.textContent = '';
    feedbackElement.className = 'feedback';
    
    // Get current question
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Update question text
    questionElement.textContent = currentQuestion.question;
    
    // Update question number
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}/${quizData.length}`;
    
    // Clear options container
    optionsContainer.innerHTML = '';
    
    // Create option buttons
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.dataset.index = index;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
}

// Handle option selection
function selectOption(index) {
    if (selectedOption !== null || quizCompleted) return;
    
    selectedOption = index;
    const currentQuestion = quizData[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-btn');
    
    // Disable all options
    optionButtons.forEach(button => {
        button.disabled = true;
    });
    
    // Check if answer is correct
    if (index === currentQuestion.correct) {
        score += 10;
        scoreElement.textContent = `Score: ${score}`;
        optionButtons[index].classList.add('correct');
        feedbackElement.textContent = '✅ Correct! Well done!';
        feedbackElement.className = 'feedback correct';
    } else {
        optionButtons[index].classList.add('incorrect');
        optionButtons[currentQuestion.correct].classList.add('correct');
        feedbackElement.textContent = '❌ Incorrect! Better luck next time!';
        feedbackElement.className = 'feedback incorrect';
    }
    
    // Enable next button
    nextButton.disabled = false;
}

// Handle next button click
function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        // Move to next question
        currentQuestionIndex++;
        loadQuestion();
    } else {
        // Quiz completed
        showFinalScore();
    }
}

// Show final score screen
function showFinalScore() {
    quizCompleted = true;
    
    // Clear options
    optionsContainer.innerHTML = '';
    
    // Hide question
    questionElement.style.display = 'none';
    
    // Show final score
    const finalScoreDiv = document.createElement('div');
    finalScoreDiv.className = 'final-score';
    finalScoreDiv.textContent = `Final Score: ${score}/${quizData.length * 10}`;
    optionsContainer.appendChild(finalScoreDiv);
    
    // Add feedback message
    let message = '';
    if (score === quizData.length * 10) {
        message = ' Perfect! You\'re a genius!';
    } else if (score >= quizData.length * 7) {
        message = ' Great job! You did well!';
    } else if (score >= quizData.length * 4) {
        message = ' Good effort! Keep practicing!';
    } else {
        message = ' Don\'t give up! Try again!';
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.style.textAlign = 'center';
    messageDiv.style.marginTop = '20px';
    messageDiv.style.fontSize = '1.2em';
    messageDiv.style.color = '#666';
    messageDiv.textContent = message;
    optionsContainer.appendChild(messageDiv);
    
    // Update question number and disable next button
    questionNumberElement.textContent = `Quiz Completed!`;
    nextButton.disabled = true;
}

// Restart quiz
function restartQuiz() {
    // Reset all state
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    quizCompleted = false;
    
    // Update score display
    scoreElement.textContent = `Score: 0`;
    
    // Show question element again
    questionElement.style.display = 'block';
    
    // Clear feedback
    feedbackElement.textContent = '';
    feedbackElement.className = 'feedback';
    
    // Load first question
    loadQuestion();
}

// Event listeners
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

// Load first question
loadQuestion();