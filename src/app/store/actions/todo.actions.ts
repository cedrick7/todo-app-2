import { createAction, props } from "@ngrx/store";
import { Todo } from "../../model/todo.model";

export const loadTodos = createAction("[TODOS] load todos");
export const todosLoaded = createAction("[TODOS] todos loaded", props<{ todos: Todo[] }>());

export const addTodo = createAction("[TODOS] add todo", props<{ todo: Todo }>());
export const todoAdded = createAction("[TODOS] todo added", props<{ todo: Todo }>());

export const toggleTodo = createAction("[TODOS] toggle todo", props<{ id: string }>());
export const todoToggled = createAction("[TODOS] todo toggled", props<{ id: string }>());

export const removeTodo = createAction("[TODOS] remove todo", props<{ id: string }>());
export const todoRemoved = createAction("[TODOS] todo removed", props<{ id: string }>());
