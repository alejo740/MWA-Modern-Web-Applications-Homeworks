import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-counter [counter]="componentCounterValue" (counterChange)="counterChange($event)"></app-counter>
  <br>
  Component Counter Value: {{componentCounterValue}}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise1';

  private componentCounterValue: number = 5;

  counterChange(e: number) {
    this.componentCounterValue = e;
  }
}
