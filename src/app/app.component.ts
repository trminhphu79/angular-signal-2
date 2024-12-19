import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child-2/child-2.component';

@Component({
  selector: 'app-root',
  imports: [ChildComponent, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'fastweb';

  watcher() {
    console.log('AppComponent watcher trigger');
    return undefined;
  }
}
