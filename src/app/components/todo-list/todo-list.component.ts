import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";

import { getTodos } from "../../store/selectors/todo.selector";
import * as TodoActions from "../../store/actions/todo.actions";
import { Todo } from "../../model/todo.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent {
  // as init + loadTodos()
  todos$ = this.store.select(getTodos);

  toggleTodo(id: string) {
    this.store.dispatch(TodoActions.toggleTodo({ id }));
  }

  removeTodo(id: string) {
    this.store.dispatch(TodoActions.removeTodo({ id }));
  }

  constructor(private store: Store<{}>) {
    console.log(this.todos$);
  }

  // todos$!: Todo[];

  // constructor(private store: Store<{ todos: { todos: Todo[] } }>) {
  //   store.select("todos").subscribe((todosState: { todos: Todo[] }) => {
  //     this.todos$ = todosState.todos;
  //   });
  // }
}
