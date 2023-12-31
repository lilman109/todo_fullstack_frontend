import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      const response = await axios.get("todos");
      setTodos(response.data);
    };

    loadTodos();
  }, []);

  const createTodo = async (todoText: string) => {
    const response = await axios.post("/todos", { newTodoText: todoText });
    const newTodo = response.data;
    setTodos(todos.concat(newTodo));
  };

  const completeTodo = async (todoId: string) => {
    const response = await axios.put(`/todos/${todoId}`);
    setTodos(response.data);
  };

  const deleteTodo = async (todoId: string) => {
    const response = await axios.delete(`/todos/${todoId}`);
    setTodos(response.data);
  };

  return (
    <div className="App">
      <h1>My Todos</h1>
      <NewTodoForm onClickCreate={createTodo} />
      <TodoList
        todos={todos}
        onCompleteTodo={completeTodo}
        onDeleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
