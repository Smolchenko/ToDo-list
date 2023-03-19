import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  font-family: "Arial";
  padding: 1rem;
  margin: 30px 0;
`;

export const StyledLabel = styled.label`
  /* input styles here */
`;

export const Input = styled.input`
  /* flex: 1; */
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 14px;
  width: 200px;
`;

export const TodoText = styled.span`
  overflow-wrap: break-word;
  color: #333;
  font-size: 14px;
  padding-left: 5px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #007bff;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }

  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export const EditButton = styled(Button)`
  background-color: #ffc107;

  &:hover {
    background-color: #e0a800;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

export const SaveButton = styled(Button)`
  background-color: #afe1af;
  color: #333;

  &:hover {
    background-color: #478778;
    color: #fff;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  line-height: 1.5;
`;

export const Field = styled.div`
  width: 50%;
`;

export const CheckboxField = styled.div`
  width: 10%;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
`;

export const ButtonField = styled.div`
  padding: 0 20px;
`;
