import { Component, computed, inject, Signal, signal, WritableSignal } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class TodoComponent {
  todo = signal(new Todo());
  todoService = inject(TodoService);
  todos: Signal<Todo[]> = this.todoService.getTodos();
  longNameTodos = computed(() => this.todos().filter(todo => todo.name.length > 6))
  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  };
}
