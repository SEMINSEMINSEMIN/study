import React, { useState } from "react";
import TodoApi from "../../api/TodoApi";
import { Todo, useTodoItemProps } from "../../types/todo";

const useTodoItem = ({ item, modifyTodo, deleteTodo }: useTodoItemProps) => {
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [modifyTodoInput, setModifyTodoInput] = useState(item.todo);

  const modifyTodoHandler = async (item: Todo) => {
    try {
      const modifiedTodo = await TodoApi.modifyTodo({
        todoId: item.id,
        isCompleted: item.isCompleted,
        todo: item.todo,
      });
      modifyTodo(modifiedTodo);
    } catch (error) {
      alert("todo수정을 실패하였습니다.");
    }
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModifyTodoInput(event.target.value);
  };

  const handleModifyTodo = async () => {
    try {
      if (modifyTodoInput.length > 255) {
        // eslint-disable-next-line no-throw-literal
        throw "Content too long";
      }
      if (modifyTodoInput.trim() !== "") {
        const modifiedTodo = await TodoApi.modifyTodo({
          todoId: item.id,
          isCompleted: item.isCompleted,
          todo: modifyTodoInput,
        });
        modifyTodo(modifiedTodo);
        setIsModifyMode(false);
      }
    } catch (error) {
      alert("todo수정을 실패하였습니다.:" + error);
    }
  };

  const handleChangeModifyIsCompleted = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    modifyTodoHandler({ ...item, isCompleted: checked });
  };

  const handleOnModifyMode = () => {
    setIsModifyMode(true);
  };

  const handCancelModfyMode = () => {
    setModifyTodoInput(item.todo);
    setIsModifyMode(false);
  };

  const handleDeleteTodo = async () => {
    try {
      await TodoApi.deleteTodo(item.id);
      deleteTodo(item.id);
    } catch (error) {
      alert("todo삭제를 실패하였습니다");
    }
  };
  return {
    isModifyMode,
    modifyTodoInput,
    handleModifyTodo,
    handleChangeInput,
    handleChangeModifyIsCompleted,
    handleOnModifyMode,
    handCancelModfyMode,
    handleDeleteTodo,
  };
};

export default useTodoItem;
