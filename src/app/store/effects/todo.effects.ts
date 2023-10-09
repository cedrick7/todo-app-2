import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";

import * as TodosActions from "../actions/todo.actions";

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.loadTodos),
      map((_) => {
        return TodosActions.todosLoaded({
          todos: [
            // {
            //   id: "1",
            //   title: "Todo 1",
            //   completed: false,
            //   userId: 1,
            // },
          ],
        });
      })
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.addTodo),
      map((action) => {
        return TodosActions.todoAdded({
          todo: action.todo,
        });
      })
    )
  );

  toggleTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.toggleTodo),
      map((action) => {
        return TodosActions.todoToggled({
          todo: action.todo,
        });
      })
    )
  );

  removeTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.removeTodo),
      // ofType(loadFlower),
      map((action) => {
        return TodosActions.todoRemoved({
          id: action.id,
        });
      })
    )
  );
}
