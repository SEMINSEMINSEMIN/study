import React from "react";
import Utils from "../Utils";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
    const today = new Date();
    const utils = new Utils();

    return (
        <section>
            <h2>To Do List for {utils.formatDate(today)}</h2>
            <ul
                style={{
                    backgroundColor: "black",
                    color: "pink",
                }}
            >
                <TodoItem todoName="잠자기" />
                <TodoItem todoName="밥먹기" isFinish={true} />
                <TodoItem todoName="닌텐도 하기" />
            </ul>
        </section>
    );
};
