import type Todo from "./todoTypes";

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = ({ todos, onToggle, onDelete }: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
            <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
            <div className="todo-buttons">
                <button onClick={() => onToggle(todo.id)}>
                {todo.completed ? "Undo" : "Done"}
                </button>
                <button onClick={() => onDelete(todo.id)}>Delete</button>
            </div>
        </li>

      ))}
    </ul>
  );
};

export default TodoList;
