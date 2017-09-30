import {Injectable} from '@angular/core';
import {ITodo} from './Todo';
import {findIndex} from 'lodash';

@Injectable()
export class TodoService {
    public todos: ITodo[] =
    [
        {id: 1, name: 'Walk in the park'},
        {id: 2, name: 'Read Book'},
        {id: 3, name: 'Run an errand'},
        {id: 4, name: 'Have dinner.'}
    ];

    getTodos(): ITodo[] {
        return this.todos;
    }

    saveNewTodo(todo: ITodo) {
        this.todos.push(todo);
    }

    updateTodo(todo: ITodo) {
        const index = findIndex(this.todos, (t: ITodo) => {
            return t.id === todo.id;
        });
        this.todos[index] = todo;
    }

    deleteTodo(todo: ITodo) {
        const index = findIndex(this.todos, (t: ITodo) => {
            return t.id === todo.id;
        });
        console.log(index);
        this.todos.splice(index, 1);

    }

}

