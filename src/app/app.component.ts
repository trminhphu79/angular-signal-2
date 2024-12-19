import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'fastweb';

  watcher() {
    // em dùng để log ra vì mỗi khi CD nó detect view nó cần re-call
    // lại cái function này đẻ check cần update chổ template binding k
    //hiện tại a click vào button ở comp con nó cũng sẽ 
    console.log('AppComponent watcher trigger');
    return 1;
  }
}
