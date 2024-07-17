import { Todo } from '../todos/models/todo.model'

export const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}
const state = {
    todos: [
        new Todo('Tesis'),
        new Todo('lectura'),
        new Todo('Memoria'),
        new Todo('Ejercicio'),
    ],
    filter : Filters.All
}

const initStore = () => {
    loadStore();
}

const loadStore = () => {
    if(!localStorage.getItem('state')) return;
    const {todos= [], filter= filter.All} = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
}
const saveStatetoLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state) );
}

const getTodo = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
                throw new Error (`Option ${filter} is not valid`)
    }
}

/**
 * 
 * @param {String} description 
 */
/** */
const addTodo = ( description ) => {
    if (!description) {
        throw new Error ('Not implemented');
    } else {
        state.todos.push(new Todo(description))
    }
    saveStatetoLocalStorage()
}

const toggleTodo = ( todoId) => {
    state.todos = state.todos.map( todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
    }
    return todo;
});
saveStatetoLocalStorage()
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStatetoLocalStorage();
}

const deleteCompleted = () =>{
    state.todos = state.todos.filter(todo =>  !todo.done);
    saveStatetoLocalStorage()
}
/**
 * 
 * @param {Filters} newFilter 
 */
const setSelectedFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStatetoLocalStorage();
}

const getCurentFilter = () => {
    return state.filter;
}

export default {
  addTodo,
  deleteCompleted,
  deleTodo: deleteTodo,
  getCurentFilter,
  getTodo,
  initStore,
  loadStore,
  setSelectedFilter,
  toggleTodo,
};