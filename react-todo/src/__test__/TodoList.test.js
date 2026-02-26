// src/__tests__/TodoList.test.jsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { beforeEach, expect, test, vi } from "vitest";

import TodoList from "../components/TodoList";
import AddTodoForm from "../components/AddToDoForm";

beforeEach(() => {
  vi.stubGlobal(
    "fetch",
    vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            { id: 1, title: "Test Todo 1" },
            { id: 2, title: "Test Todo 2" },
          ]),
      }),
    ),
  );
});

test("TodoList component renders", async () => {
  render(<TodoList />);

  console.log("before waiting");

  const todoItem = await screen.findByText("Test Todo 1");

  expect(todoItem).toBeInTheDocument();
});
