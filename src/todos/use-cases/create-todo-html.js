import { Todo } from "../models/todo.model";

/**
 * 
 * @param {Todo} todo 
 */
export const createToDoHTML = (todo) => {
if (!todo) throw new Error ('El Todo OBJECT IS REQUIRED');
    const html = `<h1>${ todo.description }</h1>`
const liElement = document.createElement('li');
liElement.innerHTML = html;
return liElement;
}