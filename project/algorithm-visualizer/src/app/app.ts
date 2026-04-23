import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Bar {
  value: number;
  state: 'default' | 'comparing' | 'sorted' | 'pivot' | 'swapping';
}

interface AlgorithmInfo {
  name: string;
  timeComplexity: string;
  spaceComplexity: string;
  description: string;
  stable: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {

  // ── State ──────────────────────────────────────────────
  bars: Bar[] = [];
  arraySize = 40;
  speed = 50;          // ms per step (lower = faster)
  isRunning = false;
  isSorted = false;
  comparisons = 0;
  swaps = 0;
  elapsedMs = 0;

  selectedAlgorithm = 'bubble';

  algorithms: Record<string, AlgorithmInfo> = {
    bubble: {
      name: 'Bubble Sort',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      description: 'Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
      stable: true
    },
    selection: {
      name: 'Selection Sort',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      description: 'Divides input into sorted and unsorted regions, repeatedly selects the smallest element from the unsorted region.',
      stable: false
    },
    insertion: {
      name: 'Insertion Sort',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      description: 'Builds sorted array one element at a time by inserting each element into its correct position.',
      stable: true
    },
    merge: {
      name: 'Merge Sort',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)',
      description: 'Divide-and-conquer algorithm that splits the array in half, recursively sorts each half, then merges them.',
      stable: true
    },
    quick: {
      name: 'Quick Sort',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(log n)',
      description: 'Picks a pivot element and partitions the array around it, then recursively sorts the sub-arrays.',
      stable: false
    },
    heap: {
      name: 'Heap Sort',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(1)',
      description: 'Converts array to a max-heap, then repeatedly extracts the maximum element to build the sorted array.',
      stable: false
    }
  };

  get currentAlgo(): AlgorithmInfo {
    return this.algorithms[this.selectedAlgorithm];
  }

  get algorithmKeys(): string[] {
    return Object.keys(this.algorithms);
  }

  get speedLabel(): string {
    if (this.speed <= 10) return 'Extra Fast';
    if (this.speed <= 30) return 'Fast';
    if (this.speed <= 70) return 'Medium';
    if (this.speed <= 120) return 'Slow';
    return 'Extra Slow';
  }

  get maxBarHeight(): number { return 300; }

  private stopFlag = false;
  private startTime = 0;
  private timerInterval: any;

  ngOnInit(): void { this.generateArray(); }
  ngOnDestroy(): void { this.clearTimer(); }

  // ── Array Generation ────────────────────────────────────
  generateArray(): void {
    if (this.isRunning) return;
    this.stopFlag = false;
    this.isSorted = false;
    this.comparisons = 0;
    this.swaps = 0;
    this.elapsedMs = 0;
    this.bars = Array.from({ length: this.arraySize }, () => ({
      value: Math.floor(Math.random() * 95) + 5,
      state: 'default'
    }));
  }

  // ── Controls ────────────────────────────────────────────
  async startSort(): Promise<void> {
    if (this.isRunning || this.isSorted) return;
    this.isRunning = true;
    this.stopFlag = false;
    this.comparisons = 0;
    this.swaps = 0;
    this.startTimer();

    const arr = this.bars;

    switch (this.selectedAlgorithm) {
      case 'bubble':    await this.bubbleSort(arr); break;
      case 'selection': await this.selectionSort(arr); break;
      case 'insertion': await this.insertionSort(arr); break;
      case 'merge':     await this.mergeSortWrapper(arr); break;
      case 'quick':     await this.quickSortWrapper(arr); break;
      case 'heap':      await this.heapSort(arr); break;
    }

    if (!this.stopFlag) {
      this.isSorted = true;
      arr.forEach(b => b.state = 'sorted');
    }

    this.isRunning = false;
    this.clearTimer();
  }

  stopSort(): void {
    this.stopFlag = true;
  }

  resetAll(): void {
    this.stopFlag = true;
    this.isRunning = false;
    this.clearTimer();
    this.generateArray();
  }

  onAlgorithmChange(): void {
    if (!this.isRunning) { this.generateArray(); }
  }

  onSizeChange(): void {
    if (!this.isRunning) { this.generateArray(); }
  }

  // ── Timer ───────────────────────────────────────────────
  private startTimer(): void {
    this.startTime = Date.now();
    this.timerInterval = setInterval(() => {
      this.elapsedMs = Date.now() - this.startTime;
    }, 50);
  }
  private clearTimer(): void {
    if (this.timerInterval) { clearInterval(this.timerInterval); }
  }

  // ── Delay ───────────────────────────────────────────────
  private delay(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, this.speed));
  }

  private async maybeStop(): Promise<boolean> {
    await this.delay();
    return this.stopFlag;
  }

  // ── Bubble Sort ─────────────────────────────────────────
  private async bubbleSort(arr: Bar[]): Promise<void> {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (this.stopFlag) return;
        arr[j].state = 'comparing';
        arr[j + 1].state = 'comparing';
        this.comparisons++;
        if (await this.maybeStop()) return;
        if (arr[j].value > arr[j + 1].value) {
          arr[j].state = 'swapping';
          arr[j + 1].state = 'swapping';
          [arr[j].value, arr[j + 1].value] = [arr[j + 1].value, arr[j].value];
          this.swaps++;
          await this.delay();
        }
        arr[j].state = 'default';
        arr[j + 1].state = 'default';
      }
      arr[n - i - 1].state = 'sorted';
    }
    arr[0].state = 'sorted';
  }

  // ── Selection Sort ──────────────────────────────────────
  private async selectionSort(arr: Bar[]): Promise<void> {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      arr[i].state = 'pivot';
      for (let j = i + 1; j < n; j++) {
        if (this.stopFlag) return;
        arr[j].state = 'comparing';
        this.comparisons++;
        await this.delay();
        if (arr[j].value < arr[minIdx].value) {
          if (minIdx !== i) arr[minIdx].state = 'default';
          minIdx = j;
          arr[minIdx].state = 'pivot';
        } else {
          arr[j].state = 'default';
        }
      }
      if (minIdx !== i) {
        arr[i].state = 'swapping';
        arr[minIdx].state = 'swapping';
        [arr[i].value, arr[minIdx].value] = [arr[minIdx].value, arr[i].value];
        this.swaps++;
        await this.delay();
        arr[minIdx].state = 'default';
      }
      arr[i].state = 'sorted';
    }
    arr[n - 1].state = 'sorted';
  }

  // ── Insertion Sort ───────────────────────────────────────
  private async insertionSort(arr: Bar[]): Promise<void> {
    const n = arr.length;
    arr[0].state = 'sorted';
    for (let i = 1; i < n; i++) {
      if (this.stopFlag) return;
      const key = arr[i].value;
      arr[i].state = 'pivot';
      let j = i - 1;
      while (j >= 0 && arr[j].value > key) {
        if (this.stopFlag) return;
        arr[j].state = 'comparing';
        this.comparisons++;
        arr[j + 1].value = arr[j].value;
        arr[j].state = 'sorted';
        this.swaps++;
        j--;
        await this.delay();
      }
      arr[j + 1].value = key;
      arr[j + 1].state = 'sorted';
    }
  }

  // ── Merge Sort ───────────────────────────────────────────
  private async mergeSortWrapper(arr: Bar[]): Promise<void> {
    await this.mergeSort(arr, 0, arr.length - 1);
  }

  private async mergeSort(arr: Bar[], l: number, r: number): Promise<void> {
    if (l >= r || this.stopFlag) return;
    const m = Math.floor((l + r) / 2);
    await this.mergeSort(arr, l, m);
    await this.mergeSort(arr, m + 1, r);
    await this.merge(arr, l, m, r);
  }

  private async merge(arr: Bar[], l: number, m: number, r: number): Promise<void> {
    const left = arr.slice(l, m + 1).map(b => b.value);
    const right = arr.slice(m + 1, r + 1).map(b => b.value);
    let i = 0, j = 0, k = l;
    while (i < left.length && j < right.length) {
      if (this.stopFlag) return;
      arr[k].state = 'comparing';
      this.comparisons++;
      await this.delay();
      if (left[i] <= right[j]) { arr[k].value = left[i++]; }
      else { arr[k].value = right[j++]; this.swaps++; }
      arr[k].state = 'sorted';
      k++;
    }
    while (i < left.length) { arr[k].value = left[i++]; arr[k].state = 'sorted'; k++; }
    while (j < right.length) { arr[k].value = right[j++]; arr[k].state = 'sorted'; k++; }
  }

  // ── Quick Sort ────────────────────────────────────────────
  private async quickSortWrapper(arr: Bar[]): Promise<void> {
    await this.quickSort(arr, 0, arr.length - 1);
  }

  private async quickSort(arr: Bar[], low: number, high: number): Promise<void> {
    if (low >= high || this.stopFlag) return;
    const pi = await this.partition(arr, low, high);
    if (this.stopFlag) return;
    await this.quickSort(arr, low, pi - 1);
    await this.quickSort(arr, pi + 1, high);
  }

  private async partition(arr: Bar[], low: number, high: number): Promise<number> {
    const pivot = arr[high].value;
    arr[high].state = 'pivot';
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (this.stopFlag) return low;
      arr[j].state = 'comparing';
      this.comparisons++;
      await this.delay();
      if (arr[j].value <= pivot) {
        i++;
        arr[i].state = 'swapping';
        [arr[i].value, arr[j].value] = [arr[j].value, arr[i].value];
        this.swaps++;
        await this.delay();
        arr[i].state = 'default';
      }
      arr[j].state = 'default';
    }
    arr[i + 1].state = 'swapping';
    [arr[i + 1].value, arr[high].value] = [arr[high].value, arr[i + 1].value];
    this.swaps++;
    await this.delay();
    arr[high].state = 'default';
    arr[i + 1].state = 'sorted';
    return i + 1;
  }

  // ── Heap Sort ─────────────────────────────────────────────
  private async heapSort(arr: Bar[]): Promise<void> {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      if (this.stopFlag) return;
      await this.heapify(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
      if (this.stopFlag) return;
      arr[0].state = 'swapping';
      arr[i].state = 'swapping';
      [arr[0].value, arr[i].value] = [arr[i].value, arr[0].value];
      this.swaps++;
      await this.delay();
      arr[0].state = 'default';
      arr[i].state = 'sorted';
      await this.heapify(arr, i, 0);
    }
    arr[0].state = 'sorted';
  }

  private async heapify(arr: Bar[], n: number, i: number): Promise<void> {
    if (this.stopFlag) return;
    let largest = i;
    const l = 2 * i + 1, r = 2 * i + 2;
    arr[i].state = 'pivot';
    if (l < n) { arr[l].state = 'comparing'; this.comparisons++; }
    if (l < n && arr[l].value > arr[largest].value) largest = l;
    if (r < n) { arr[r].state = 'comparing'; this.comparisons++; }
    if (r < n && arr[r].value > arr[largest].value) largest = r;
    await this.delay();
    if (l < n && arr[l].state !== 'sorted') arr[l].state = 'default';
    if (r < n && arr[r].state !== 'sorted') arr[r].state = 'default';
    arr[i].state = 'default';
    if (largest !== i) {
      [arr[i].value, arr[largest].value] = [arr[largest].value, arr[i].value];
      this.swaps++;
      await this.heapify(arr, n, largest);
    }
  }

  // ── Bar height helper ────────────────────────────────────
  barHeight(bar: Bar): number {
    return (bar.value / 100) * this.maxBarHeight;
  }

  trackBy(_: number, bar: Bar) { return bar; }
}
