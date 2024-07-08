/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */

import { Todo } from "../models/todo.model";
import { createToDoHTML } from "./create-todo-html";

export const renderTodos = (elementId, todos = []) => {
console.log(elementId, todos);
const element = document.querySelector(elementId);
 todos.forEach ( todo => {
    element.append(createToDoHTML(todo))

 });
} 