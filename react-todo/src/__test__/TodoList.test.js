import React from "react";
import { render, screen, fireEvent, getByText } from "@testing-library/react";
import TodoList from "../components/TodoList";

// TodoList component render correctly
test("check TodoList component renders", () => {
  render(<TodoList />);

  expect(screen.getByText("Do 120 pushups")).toBeInTheDocument();
  expect(screen.getByText("Read Think Again by Adam Grant")).toBeInTheDocument();
});

// new todo added test
test("new to do can be added", () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText("Add Todo ...");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Make money" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Make money")).toBeInTheDocument();
});

// todo marked as completed
test("todo completed", () => {
  render(<TodoList />);

  const todoItem = screen.getByText("Read Think Again by Adam Grant");

  expect(todoItem).toHaveStyle("text-decoration: none");

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: none");
});

// todo item deleted when button is being clicked
test("todo item can be deleted when button is clicked", () => {
  render(<TodoList />);

  const todoText = screen.getByText("Read Think Again by Adam Grant");

  expect(todoText).toBeInTheDocument();

  const deleteButton = todoText.closest("li").querySelector("button");

  fireEvent.click(deleteButton);

  expect(screen.queryByText("Read Think Again by Adam Grant")).not.toBeInTheDocument();
});
