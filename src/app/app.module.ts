import { AppComponent } from "./app.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { HeaderComponent } from "./components/header/header.component";
import { InputFieldComponent } from "./components/input-field/input-field.component";

import { AppRoutingModule } from "./app-routing.module";
import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { todosKey } from "./store/reducers/todo.reducers";
import { TodosReducer } from "./store/reducers/todo.reducers";
import { EffectsModule } from "@ngrx/effects";
import { TodoEffects } from "./store/effects/todo.effects";

@NgModule({
  declarations: [AppComponent, TodoListComponent, HeaderComponent, InputFieldComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ [todosKey]: TodosReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
