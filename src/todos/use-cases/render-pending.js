import todoStore, { Filters } from "../../store/todo.store";

let element;
/**
 * 
 * @param {Element} elementId 
 */
export const renderPending = (elementId) => {
    if (!element)
    element = document.querySelector(elementId);
    if (!element )
    throw new Error (`Element ${elementId}  not fount`);
    element.innerHTML = todoStore.getTodo(Filters.Pending).length;
}