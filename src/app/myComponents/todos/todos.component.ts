import { Component } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  localItem: string;
  todos: ToDo[];
  

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null)
    {
      this.todos = [];
    }
    else
    {
      this.todos = JSON.parse(this.localItem)
    }

  }

  deleteTodo(todo: ToDo){
    console.log(todo);
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos))
    
  }
  addTodo(todo: ToDo){
    console.log(todo)
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  
  
  
}
