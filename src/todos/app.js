import todoStore from '../store/todo.store';
import html from '../todos/app.html?raw';
import { renderTodos } from './use-cases';

const elementIDs = {
    TodoList: '.todo-list',
}

/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) => {

    const displayTodos = () =>{
        const todos = todoStore.getTodo( todoStore.getCurentFilter());
        renderTodos(elementIDs.TodoList, todos);
    } 
    // cuando la funcion app se llama
    (()=> {
        const app = document.createElement('div');
        app.innerHTML = html
        document.querySelector(elementId).append(app);
        displayTodos();
    })();
}