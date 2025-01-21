import { Component, computed, inject, Signal, signal, WritableSignal } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { FormsModule } from "@angular/forms";
import { CvComponent } from "../../cv/cv/cv.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone: true,
  imports: [FormsModule],
  providers: [TodoService]
})
export class TodoComponent {
  todo = signal(new Todo());
  todoService = inject(TodoService);
  todos: Signal<Todo[]> = this.todoService.getTodos();
  constructor() {
    this.todoService.getTodosFromApi().subscribe({
      next: todos => {
        console.log(todos);
      },
      error: (e) => {
        console.log(e);
      }
    })
  }
  longNameTodos = computed(() => this.todos().filter(todo => todo.name.length > 6))
  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  };
}
