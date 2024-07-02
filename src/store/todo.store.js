import { Todo } from '../todos/models/todo.model'

const Filters = {
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
    console.log('Init Store inicializado 🥑');
    console.log(state);
}

const loadStore = () => {
    throw new Error ('Not implemented');
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
}

const toggleTodo = ( todoId) => {
    state.todos = state.todos.map( todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
    }
    return todo;
});
}

const deleTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted = () =>{
    state.todos = state.todos.filter(todo =>  todo.done);
}
/**
 * 
 * @param {Filters} newFilter 
 */
const setSelectedFilter = (newFilter = Filters.All) => {
    state.filter = newFilter
}

const getCurentFilter = () => {
    return state.filter;
}

export default {
  addTodo,
  deleteCompleted,
  deleTodo,
  getCurentFilter,
  getTodo,
  initStore,
  loadStore,
  setSelectedFilter,
  toggleTodo,
};