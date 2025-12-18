"use client";

import { useTodos } from "@/store/todos";
import { Todo } from "@/store/todos";
import { useSearchParams } from "next/navigation";

export const Todos = () => {
  const {
    todos,
    handleTodoDelete,
    toggleTodoAsCompleted,
  }: {
    todos: Todo[];
    handleTodoDelete: (id: string) => void;
    toggleTodoAsCompleted: (id: string) => void;
  } = useTodos()!;
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");

  let filteredTodos: Todo[] = todos;

  if (todosFilter === "active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (todosFilter === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  return (
    <ul>
      {filteredTodos.map((todo: Todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            name=""
            id={`todo-${todo.id}`}
            checked={todo.completed}
            onChange={() => toggleTodoAsCompleted(todo.id)}
          />
          <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>

          {todo.completed && (
            <button type="button" onClick={() => handleTodoDelete(todo.id)}>
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};
