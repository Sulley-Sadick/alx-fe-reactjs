import { useState } from "react";

function AddToDoForm() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setToDoList] = useState([]);

  const handleSubmit = function (e) {
    e.preventDefault();

    console.log(todoList);

    if (inputValue.trim("") === "") return;

    setToDoList((prevTodos) => {
      const newTodo = [...prevTodos, inputValue];

      return newTodo;
    });

    // clear input field
    setInputValue("");
  };

  const deleteTodo = function (index) {
    setToDoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter todo ... " />
        <button style={{ marginLeft: "0.5rem" }} type="submit">
          Add
        </button>
        <ul>
          {todoList.map((todo, index) => (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", flexDirection: "column" }}>
              <label htmlFor="todo" data-index={index} className="label">
                <li style={{ listStyle: "none" }} key={index}>
                  {todo}
                </li>
                <input type="checkbox" name="todo" id="todo" />
                Completed
              </label>
              <button style={{ marginBottom: "1rem" }} type="button" onClick={() => deleteTodo(index)}>
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default AddToDoForm;
