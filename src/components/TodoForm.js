import { useState } from "react";
import { Input, Button, StyledLabel } from "../styles/styled-components";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText("");
    }
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>Five minute journal</h1>
      <form onSubmit={handleSubmit}>
        {/* no need in "htmlFor". input is inside label not parallel */}
        <StyledLabel>
          <Input
            id="new-item"
            type="text"
            value={text}
            data-testid="new-item" // ...screen.getByTestId('new-item')
            onChange={(e) => setText(e.target.value)}
          />
        </StyledLabel>
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

export default TodoForm;
