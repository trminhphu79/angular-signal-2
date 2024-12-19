import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-child-2',
  imports: [],
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child2Component {
  watcher() {
    console.log('Child2Component watcher trigger');
    return undefined;
  }

  triggerCd() {
    console.log('Child2Component triggerCd');
  }
}
