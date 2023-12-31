import { TodoItem } from "../types/todo";
import TodoListItem from "./TodoListItem";

type TodoListProp = {
  todos: TodoItem[];
  onCompleteTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
};

const TodoList = ({ todos, onCompleteTodo, onDeleteTodo }: TodoListProp) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onClickComplete={onCompleteTodo}
          onClickDelete={onDeleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
