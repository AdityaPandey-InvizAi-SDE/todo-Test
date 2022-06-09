import React from "react";
// import Main from "./components/Main";
import "./App.css";
import TodoList from "./components/TodoList";
// import DataRes from "./Data.json";

function App() {
	return <div className="todo-app">{<TodoList />}</div>;
}

export default App;
