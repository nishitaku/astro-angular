import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  standalone: true,
  template: `
    <div>
      <div>{{ count }}</div>
      <button (click)="onIncrement()">increment</button>
      <button (click)="onDecrement()">decrement</button>
    </div>
  `,
})
export class CounterComponent {
  count = 0;

  onIncrement() {
    this.count++;
  }

  onDecrement() {
    this.count--;
  }
}
