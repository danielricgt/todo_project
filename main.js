import './style.css'
import { App } from '../05-todo-app/src/todos/app'
import todoStore from "./src/store/todo.store";

todoStore.initStore();
App('#app');


