import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { TodoService } from '../../services/todo.service';

import {Todo} from '../../models/Todos';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  // Set Dynamic Classes
  setClasses() {
    return {
     todo: true,
     'is-complete': this.todo.completed
   };
  }

  onToggle(todo) {
    // Toggle in UI
    console.log('toggle');
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });
  }

  onDelete(todo) {
    console.log('delete');
    this.deleteTodo.emit(todo);
  }
  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.todo, event.previousIndex, event.currentIndex);
  // }
}
