import React from "react";

type TodoItemProps = {
    todoName: string;
    isFinish?: boolean;
};

export const TodoItem = ({ todoName, isFinish = false }: TodoItemProps) => {
    return (
        <li>
            {todoName} {isFinish && "✅"}
        </li>
    );
};
