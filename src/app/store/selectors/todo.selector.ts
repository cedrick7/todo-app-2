import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodosState, todosKey } from "../reducers/todo.reducers";

export const todosState = createFeatureSelector<TodosState>(todosKey);

export const getTodos = createSelector(todosState, (state) => state?.todos);
