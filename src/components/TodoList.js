import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

import { List } from "../styles/styled-components";
// CSS-in-JS library.

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), task: "Clean the dishes", completed: false },
    { id: uuidv4(), task: "Shop for groceries", completed: true },
    { id: uuidv4(), task: "Eat breakfast", completed: false }
  ]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);
  useEffect(() => {
    // The dependency has changed from undefined (the initial value of todos state)
    // to the initial value that you have set. Therefore, the effect will run
    // when the component is mounted, and the initial value of todos will be
    // saved to local storage.
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: uuidv4(),
      task: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };
  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const editTodo = (id, text) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: text };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <section>
      <TodoForm addTodo={addTodo} />
      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            completeTodo={completeTodo}
          />
        ))}
      </List>
      <h2 style={{ marginLeft: "20px" }}>- Add Testing</h2>
    </section>
  );
};

export default TodoList;
