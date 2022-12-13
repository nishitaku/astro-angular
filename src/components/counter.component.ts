import { Component, Input } from "@angular/core";

@Component({
  selector: "app-counter",
  standalone: true,
  template: `
    <h2>{{ title }}</h2>
    <div>
      <div>{{ count }}</div>
      <button (click)="onIncrement()">increment</button>
      <button (click)="onDecrement()">decrement</button>
    </div>
  `,
})
export class CounterComponent {
  @Input() title: string;

  count = 0;

  onIncrement() {
    this.count++;
  }

  onDecrement() {
    this.count--;
  }
}
