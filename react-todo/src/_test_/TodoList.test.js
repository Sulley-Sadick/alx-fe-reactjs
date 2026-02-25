// src/__tests__/TodoList.test.jsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";
import AddTodoForm from "../AddTodoForm";

// Mock fetch for initial todos
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          { id: 1, title: "Demo Todo 1", completed: false },
          { id: 2, title: "Demo Todo 2", completed: false },
        ]),
    }),
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders initial todos", async () => {
  render(<TodoList />);
  // Wait for fetch to complete
  await waitFor(() => expect(screen.getByText("Demo Todo 1")).toBeInTheDocument());
  expect(screen.getByText("Demo Todo 2")).toBeInTheDocument();
});

test("can add a new todo", async () => {
  render(
    <>
      <AddTodoForm />
      <TodoList />
    </>,
  );

  // Simulate adding a todo
  const input = screen.getByPlaceholderText(/add new todo/i);
  const addButton = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(addButton);

  // Expect the new todo to appear
  await waitFor(() => expect(screen.getByText("New Todo")).toBeInTheDocument());
});

test("can toggle a todo completed state", async () => {
  render(<TodoList />);
  await waitFor(() => screen.getByText("Demo Todo 1"));

  const todoItem = screen.getByText("Demo Todo 1");
  const toggleButton = screen.getByTestId("toggle-1"); // assuming each toggle button has data-testid

  fireEvent.click(toggleButton);

  expect(todoItem).toHaveClass("completed"); // assuming you apply "completed" CSS class
});

test("can delete a todo", async () => {
  render(<TodoList />);
  await waitFor(() => screen.getByText("Demo Todo 1"));

  const deleteButton = screen.getByTestId("delete-1"); // assuming each delete button has data-testid
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Demo Todo 1")).not.toBeInTheDocument();
});
