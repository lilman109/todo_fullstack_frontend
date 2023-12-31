import { useState } from "react";

export type NewTodoFormProp = {
  onClickCreate: (title: string) => void;
};

const NewTodoForm = ({ onClickCreate }: NewTodoFormProp) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          onClickCreate(inputValue);
          setInputValue("");
        }}
      >
        Create New Todo
      </button>
    </div>
  );
};

export default NewTodoForm;
