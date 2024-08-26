import React from "react";
import Utils from "../Utils";

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
                <li>잠자기</li>
                <li>밥먹기</li>
                <li>닌텐도 하기</li>
            </ul>
        </section>
    );
};
