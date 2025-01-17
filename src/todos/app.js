import todoStore, { Filters } from "../store/todo.store";
import html from "../todos/app.html?raw";
import { renderTodos, renderPending } from "./use-cases";

const elementIDs = {
  TodoList: ".todo-list",
  NewTodoInput: "#new-todo-input",
  ClearCompleted: ".clear-completed",
  TodoFilters: ".filtro",
  PendingCountLabel: "#pending-count"
};

/**
 *
 * @param {String} elementId
 */

export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodo(todoStore.getCurentFilter());
    renderTodos(elementIDs.TodoList, todos);
    updatePendingCount();
  };
  const updatePendingCount = () => {
    renderPending(elementIDs.PendingCountLabel);
  }
  // cuando la funcion app se llama
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  //Referencias HTML
  const newDescriptionInput = document.querySelector(
    (elementIDs.NewTodoInput = "#new-todo-input")
  );
  const todoListUL = document.querySelector(elementIDs.TodoList);
  const clearCompletedButton = document.querySelector(
    elementIDs.ClearCompleted
  );
  const filtersLIs = document.querySelectorAll(elementIDs.TodoFilters);
  //Listeners
  newDescriptionInput.addEventListener("keyup", (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = "";
  });

  todoListUL.addEventListener("click", (event) => {
    const element = event.target.closest("[data-id]");
    todoStore.toggleTodo(element.getAttribute("data-id"));
    displayTodos();
  });

  todoListUL.addEventListener("click", (event) => {
    const isDestroyElement = event.target.className === "destroy";
    const element = event.target.closest("[data-id]");
    if (!element || !isDestroyElement) return;
    todoStore.deleTodo(element.getAttribute("data-id"));
    displayTodos();
  });

  clearCompletedButton.addEventListener("click", () => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  filtersLIs.forEach((element) => {
    element.addEventListener("click", (element) => {

      filtersLIs.forEach((el) => el.classList.remove("selected"));
      element.target.classList.add("selected");
      
      switch (element.target.text) {
        case "Todos":
          todoStore.setSelectedFilter(Filters.All);
          break;
        case "Pendientes":
          todoStore.setSelectedFilter(Filters.Pending);
          break;
        case "Completados":
          todoStore.setSelectedFilter(Filters.Completed);
          break;
      }
      displayTodos();
    });
  });
};
