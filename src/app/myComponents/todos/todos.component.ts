import { Component } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: ToDo[];
  constructor() {
    this.todos = [
      {
        title: 'This is my first title',
        description: 'This is my description',
      },
      {
        title: 'This is my second title',
        description: 'This is my description',
      },
      {
        title: 'This is my last title',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores omnis qui beatae obcaecati explicabo consequatur maxime et rem neque! Officiis magni perspiciatis dicta qui porro, tempora, consequatur velit quam iure placeat quia repellat. Obcaecati.',
      },
    ];
  }

  deleteTodo(todo: ToDo){
    console.log(todo);
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
  }
}
