import { useState, useEffect } from "react";
import type Todo from "./todoTypes";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./App.css";


function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleClick = (text: string): void => {
    const newTodo: Todo = {
      text,
      id: Date.now(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoForm onAdd={handleClick} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;
