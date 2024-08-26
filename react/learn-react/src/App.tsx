import React from "react";
import { Gallery } from "./components/Gallery";
import { TodoList } from "./components/TodoList";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Gallery />
            <TodoList />
        </div>
    );
}

export default App;
