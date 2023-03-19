import { useState, useRef, useEffect } from "react";
import {
  ListItem,
  Checkbox,
  Input,
  TodoText,
  EditButton,
  DeleteButton,
  SaveButton,
  Field,
  CheckboxField,
  ButtonField,
  StyledLabel
} from "../styles/styled-components";
// styled-components are just React components with CSS styling applied using tagged template literals.

const TodoItem = ({ todo, deleteTodo, editTodo, completeTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.task);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEdit = (e) => {
    e.preventDefault();
    editTodo(todo.id, text);
    setIsEditing(false);
  };

  if (isEditing) {
    // return (
    // <ListItem>
    //   <form onSubmit={handleEdit}>
    //     <Checkbox
    //       checked={todo.completed}
    //       onChange={() => completeTodo(todo.id)}
    //     />
    //     <label>
    //       {/* add "for" in label */}
    //       <InputLi
    //         type="text"
    //         value={text}
    //         onChange={(e) => setText(e.target.value)}
    //       />
    //     </label>
    //     <SaveButton type="submit">Save</SaveButton>
    //   </form>
    // </ListItem>
    // );
    return (
      <ListItem>
        <form onSubmit={handleEdit} style={{ display: "contents" }}>
          {/* display property to "contents," which means the form will 
              not generate a new block-level box but will instead inherit 
              its parent's display value. */}
          <CheckboxField>
            <Checkbox
              checked={todo.completed}
              onChange={() => completeTodo(todo.id)}
            />
          </CheckboxField>
          <Field>
            <StyledLabel>
              <Input
                type="text"
                value={text}
                ref={inputRef}
                onChange={(e) => setText(e.target.value)}
              />
            </StyledLabel>
          </Field>
          <ButtonField>
            <SaveButton type="submit" onClick={handleEdit}>
              Save
            </SaveButton>
          </ButtonField>
        </form>
      </ListItem>
    );
  }

  // return (
  //   <ListItem>
  //     <Checkbox
  //       checked={todo.completed}
  //       onChange={() => completeTodo(todo.id)}
  //     />
  //     <TodoText completed={todo.completed}>{todo.task}</TodoText>
  //     <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
  //     <DeleteButton onClick={() => deleteTodo(todo.id)}>Delete</DeleteButton>
  //   </ListItem>
  // );
  return (
    <ListItem>
      <CheckboxField>
        <Checkbox
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)}
        />
      </CheckboxField>
      <Field>
        <TodoText completed={todo.completed}>{todo.task}</TodoText>
      </Field>
      <ButtonField>
        <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
      </ButtonField>
      <ButtonField>
        <DeleteButton onClick={() => deleteTodo(todo.id)}>Delete</DeleteButton>
      </ButtonField>
    </ListItem>
  );
};

export default TodoItem;
