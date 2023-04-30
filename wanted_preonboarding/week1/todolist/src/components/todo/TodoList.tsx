import styled from "styled-components";
import { TodoListProps } from "../../types/todo";
import TodoItem from "./item/TodoItem";

const TodoList = (props: TodoListProps) => {
  const { todos, modifyTodo, deleteTodo } = props;

  return (
    <Cont>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo}
          modifyTodo={modifyTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </Cont>
  );
};

const Cont = styled.ul`
  width: 80%;
`;

export default TodoList;
