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
  constructor(private store: Store<{}>) {
    console.log(this.todos$);
  }

  // as init + loadTodos()
  todos$ = this.store.select(getTodos);

  // input onClick
  toggleTodo(todo: Todo) {
    this.store.dispatch(TodoActions.toggleTodo({ todo: todo }));
  }

  // button onClick
  removeTodo(id: string) {
    this.store.dispatch(TodoActions.removeTodo({ id }));
  }
}
