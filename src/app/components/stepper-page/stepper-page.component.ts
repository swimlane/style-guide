import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StepperPosition } from '@swimlane/ngx-ui';

@Component({
  selector: 'app-stepper-page',
  templateUrl: './stepper-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperPageComponent {
  readonly StepperPosition = StepperPosition;
  readonly steps: Array<{ readonly title: string; readonly icon?: string }> = [
    { title: 'step 1' },
    { title: 'step 2' },
    { title: 'step 3' },
    { title: 'step 4' }
  ];

  index = 2;
  readonly = true;
  position = StepperPosition.Left;

  next() {
    if (this.index < this.steps.length - 1) {
      this.index++;
    }
  }

  previous() {
    if (this.index > 0) {
      this.index--;
    }
  }

  toggleReadonly() {
    this.readonly = !this.readonly;
  }

  addStep() {
    this.steps.push({
      title: 'next step',
      icon: 'ngx-icon ngx-bug'
    });
  }
}
