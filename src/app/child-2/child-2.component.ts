import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-child-2',
  imports: [],
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component {

  watcher() {
    // em dùng để log ra vì mỗi khi CD nó detect view nó cần re-call
    // lại cái function này đẻ check cần update chổ template binding k
    //hiện tại a click vào button ở comp con nó cũng sẽ 
    console.log('Child2Component watcher trigger');
    return undefined;
  }
}
