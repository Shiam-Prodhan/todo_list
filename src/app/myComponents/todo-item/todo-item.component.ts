import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: ToDo;
  @Output() todoDelete: EventEmitter<ToDo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<ToDo> = new EventEmitter();
  onDelete(todo: ToDo) {
    this.todoDelete.emit(todo);
    console.log('Delete button is clicked');
  }
  onCheck(todo){
    this.todoCheckbox.emit(todo)
  }
  
}
