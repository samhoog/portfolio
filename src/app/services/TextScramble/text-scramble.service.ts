import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextScrambleService {
  private el!: HTMLElement;
  private chars = '!<>-_\\/[]{}—=+*^?#________';
  private queue: Array<{ from: string, to: string, start: number, end: number, char?: string }> = [];
  private frame = 0;
  private frameRequest: number | null = null;
  private resolve!: () => void;

  constructor() {}

  init(el: HTMLElement) {
    this.el = el;
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>(resolve => this.resolve = resolve);
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 55);
      const end = start + Math.floor(Math.random() * 55);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest!);
    this.frame = 0;
    this.update();
    return promise;
  }

  private update() {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      const { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          this.queue[i].char = this.randomChar();
        }
        output += `<span class="dud"><i>${this.queue[i].char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update.bind(this));
      this.frame++;
    }
  }

  private randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}
