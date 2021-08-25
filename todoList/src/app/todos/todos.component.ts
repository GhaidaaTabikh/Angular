import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  newTodo: string = '';
  todos: string[] = [];
  doneTodos : string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  
  addToList(newTodo: string): void {
    this.todos.push(newTodo);
    this.newTodo = '';
  }

  
  doneTodo(i: number ,todo:string): void {
    this.doneTodos.push(todo)
    this.todos.splice(i, 1);
  }

  removeTodo(i: number): void {
    this.todos.splice(i, 1);
  }

}
