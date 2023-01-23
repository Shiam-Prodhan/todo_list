import { Component, EventEmitter, Output } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  title: string
  desc:string
  active: boolean
  @Output() todoAdd: EventEmitter<ToDo> = new EventEmitter();
  
  onSubmit(){
    const todo = {
      title: this.title,
      description:this.desc,
      active: this.active
    }
    this.todoAdd.emit(todo)
  }
}
