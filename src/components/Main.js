import React from "react";
// import './App.css';
// import TodoList from "./components/TodoList";
import DataRes from "./Utils/Data.json";

function Main() {
	const [order, SetOrder] = React.useState(DataRes);
	const [addOrder, SetAddOrder] = React.useState("");
	console.log(order);
	// return <div className="todo-app">{/* <TodoList /> */}</div>;
	const addMore = (d) => {
		console.log(d);
	};
	return (
		<div>
			{order?.orderD.map((d) => {
				return <div>{d.title}</div>;
			})}
			<div>Add more</div>
			<input type="text" onChange={SetAddOrder} />
			<button onClick={addMore(addOrder)}>Add More</button>
		</div>
	);
}

export default Main;
