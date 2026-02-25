import { useEffect, useState } from "react";

function TodoList() {
  const [todoList, setToDoList] = useState(null);

  useEffect(() => {
    const fetchTodoList = async function () {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");

        if (!response.ok) return `HTTP error: ${response.status}`;

        const data = await response.json();

        setToDoList(data);
      } catch (err) {
        console.error("Error message", err);
      }
    };

    fetchTodoList();
  }, []);

  return todoList?.map((todo) => (
    <div key={todo.id}>
      <h2>{todo.title}</h2>
    </div>
  ));
}

export default TodoList;
