import { ITodo } from './Todo';
import { Component, OnInit } from '@angular/core';
import {TodoService} from './todo.service';
import {clone} from 'lodash';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: ITodo[];
  newTodo: ITodo;
  editedTodo: ITodo;


  isNewTodoForm: boolean;

  isEditTodoForm: boolean;

  _statusMessage= 'Loading data. Please wait ...';

  constructor(private _todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
   }

  getTodos() {
    this.todos = this._todoService.getTodos();
   }

   showEditTodoForm(todo: ITodo) {
     this.isEditTodoForm = true;
     this.isNewTodoForm = false;
     this.editedTodo = clone(todo);
   }

  showAddTodoForm() {

    this.isNewTodoForm = true;
    this.isEditTodoForm = false;
    this.newTodo = {id: 0, name: ''};

   }

   updateTodo() {
     this._todoService.updateTodo(this.editedTodo);
     this.isEditTodoForm = false;
     this.editedTodo = {id: 0, name: ''};
   }

  saveNewTodo() {
     this._todoService.saveNewTodo(this.newTodo);
     this.isNewTodoForm = false;
     this.newTodo = {id: 0, name: ''};
   }

   deleteTodo(todo: ITodo) {
     this._todoService.deleteTodo(todo);
   }

}
