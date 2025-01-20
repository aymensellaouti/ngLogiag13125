import { inject, Injectable, Signal, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "../../services/logger.service";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosSignal = signal<Todo[]>([]);

  todos = this.todosSignal.asReadonly();
  private loggerService = inject(LoggerService);
  /**
   * elle retourne la liste des todos
   *
   * @returns un signal de Todo[]
   */
  getTodos(): Signal<Todo[]> {
    return this.todos;
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    this.todosSignal.update((todos) => ([...todos, todo]));
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
    let isDeleted = false;
    this.todosSignal.update((todos) => {
      return todos.filter(actualTodo => {
        if (todo == actualTodo)
          isDeleted = true;
        return todo != actualTodo;
      });
    });
    return isDeleted;
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    this.loggerService.log(this.todos())
  }
}
