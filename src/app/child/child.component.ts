import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { interval, take, timer } from 'rxjs';
import { NestedChildComponent } from './nested-child/nested-child.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  imports: [CommonModule, NestedChildComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  public counter = signal(10);

  ngAfterViewInit() {
    setInterval(() => {
      this.counter.set(new Date().getTime());
    }, 500);
  }

  changeCount() {
    // nay no se trigger CD tu rooot xuong luon
    this.counter.set(new Date().getTime());
  }
}
