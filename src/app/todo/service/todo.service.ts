import { inject, Injectable, Signal, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "../../services/logger.service";
import { HttpClient } from "@angular/common/http";
import { APP_API } from "../../config/app-api.config";
import { map, Observable } from "rxjs";

export interface ApiResponseDto {
  todos: TodoDto[];
  total: number;
  skip: number;
  limit: number;
}

export interface TodoDto {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosSignal = signal<Todo[]>([]);
  http = inject(HttpClient);
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

  getTodosFromApi(): Observable<TodoDto[]> {
    return this.http.get<ApiResponseDto>(APP_API.todo).pipe(
      map(response => response.todos)
    );
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
