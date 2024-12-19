import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nested-child',
  imports: [],
  templateUrl: './nested-child.component.html',
  styleUrl: './nested-child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedChildComponent {
  watcher() {
    console.log('NestedChildComponent watcher');
    return 1;
  }
}
