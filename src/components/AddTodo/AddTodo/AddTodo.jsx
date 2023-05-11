import React, {useState} from "react";

const AddTodo = ({todos, setTodos}) => {
  const [value, setValue] = useState("");

  const addTodo = () => {
    setTodos([
      {
        id: Date.now(),
        title: value,
        status: false,
      }, ...todos]);
      setValue('')
  };

  return (
    <div>
      <input
        placeholder="Добавить новую задачу"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTodo}>Добавить новую задачу</button>
    </div>
  );
};

export default AddTodo;
