import { TodoItem } from "../types/todo";

type TodoListItemProp = {
  todo: TodoItem;
  onClickComplete: (id: string) => void;
  onClickDelete: (id: string) => void;
};

const TodoListItem = ({
  todo,
  onClickComplete,
  onClickDelete,
}: TodoListItemProp) => {
  return (
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Completed!</p>}
      <button onClick={() => onClickComplete(todo.id)}>
        Mark As Completed
      </button>
      <button onClick={() => onClickDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoListItem;
