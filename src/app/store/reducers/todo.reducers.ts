import { createReducer, on } from "@ngrx/store";
import * as TodosActions from "../actions/todo.actions";
import { Todo } from "../../model/todo.model";

export const todosKey = "todos";

export interface TodosState {
  todos: Todo[];
}

export const initialState: TodosState = {
  todos: [
    // {
    //   id: "1",
    //   title: "Todo 1",
    //   completed: false,
    //   userId: 1,
    // },
  ],
};

export const TodosReducer = createReducer(
  initialState,

  on(TodosActions.todosLoaded, (state, { todos }) => ({
    ...state,
    todos: todos,
  })),
  on(TodosActions.todoAdded, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),
  on(TodosActions.todoToggled, (state, action) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === action.todo.id ? { ...todo, completed: !todo.completed } : todo
    ),
  })),
  on(TodosActions.todoRemoved, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  }))
);
