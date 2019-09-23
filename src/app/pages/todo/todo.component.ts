import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
export class Todo {
  ref: string;
  label: string;
  bold: boolean;
  italic: boolean;
  selected: boolean;
  requestFocus: boolean = true;
  todoList: Array<Todo> = [];
  parent: Todo
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  todoRoot: Array<Todo> = [];
  constructor(private cdr:ChangeDetectorRef) { }

  ngOnInit() {
  }

  add(parent) {
    let todo = new Todo();
    todo.label = '';
    if (parent) {
      parent.todoList.push(todo);
    } else {
      this.todoRoot.push(todo);

    }
    console.log(this.todoRoot);
  }

  onSelect($event) {

  }

  handleGoIn($event) {
    console.log('go in ', $event);
    if (!$event.parent && $event.currentIndex > 0) {
      let prev = this.todoRoot[$event.currentIndex - 1];
      let node = { ...$event.current };
      node.parent = prev;
      prev.todoList.push(node);
      node.requestFocus= true;
      this.todoRoot.splice($event.currentIndex, 1);
    //  setTimeout(() => {
    //    this.cdr.detectChanges();
    //  });
     
    }

    if ($event.parent && $event.currentIndex > 0) {
      let prev = $event.parent.todoList[$event.currentIndex-1];
      let node = { ...$event.current };
      node.parent = prev;
      prev.todoList.push(node);
      node.requestFocus = true;
      $event.parent.todoList.splice($event.currentIndex, 1);
      // setTimeout(() => {
      //   this.cdr.detectChanges();
      // });
    }
    // this.todoRoot = [...this.todoRoot];
  }

  handleGoOut($event) {
    console.log('go out', $event);
  }


}
