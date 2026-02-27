import { useState } from "react";

const TodoItem = function ({ todo, toggleTodo, deleteTodo }) {
  return (
    <li style={{ listStyle: "none" }}>
      <span style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }} onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </span>

      <button type="button" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

const AddTodoForm = function ({ AddTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!value.trim()) return;

    AddTodo(value);

    // clear input field
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo" id="todo" onChange={(e) => setValue(e.target.value)} value={value} placeholder="Add Todo ..." />
      <button type="submit">Add</button>
    </form>
  );
};

const TodoList = function () {
  const [todos, setTodos] = useState([
    { id: 1, text: "Read Think Again by Adam Grant", completed: false },
    { id: 2, text: "Do 120 pushups", completed: false },
  ]);

  const AddTodo = function (text) {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = function (id) {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = function (id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodoForm AddTodo={AddTodo} />

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
