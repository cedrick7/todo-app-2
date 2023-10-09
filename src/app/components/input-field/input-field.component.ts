import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { NgForm } from "@angular/forms";

import { addTodo } from "../../store/actions/todo.actions";
import { Todo } from "src/app/model/todo.model";

@Component({
  selector: "app-input-field",
  templateUrl: "./input-field.component.html",
  styleUrls: ["./input-field.component.scss"],
})
export class InputFieldComponent {
  constructor(private store: Store<{}>) {}

  // form submit
  addTodo(addTodoForm: NgForm): void {
    const _todo: Todo = {
      id: Date.now().toString(),
      title: addTodoForm.form.value.addTodo,
      completed: false,
      userId: 1,
    };

    this.store.dispatch(addTodo({ todo: _todo }));

    addTodoForm.form.reset();
  }
}
