import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from 'src/app/pages';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() parent: Todo;
  @Input() index: number;

  @Output() select = new EventEmitter();
  @Output() goIn = new EventEmitter();
  @Output() goOut = new EventEmitter();
  @Output() add = new EventEmitter();
  @ViewChild('input') input: ElementRef<HTMLElement>;
  constructor() { }

  ngOnInit() {


  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.todo.requestFocus) {
        if (this.input) {
          this.input.nativeElement.focus();
          this.todo.requestFocus = false;
        }
      }
    });
  }


  emitIn($event: Event) {
    $event.preventDefault();
    this.goIn.emit({ current: this.todo, parent: this.parent, currentIndex: this.index })
  }
  emitOut($event: Event) {
    $event.preventDefault();
    this.goOut.emit({ current: this.todo, parent: this.parent, currentIndex: this.index })
  }



}
