import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TODO_LIST } from "./mock/todo.list";
import Home from "./view/home/home";
import TaskAdd from "./view/add/TaskAdd";
import TaskEdit from "./view/edit/TaskEdit";
import TaskDelete from "./view/delete/TaskDelete";

function App() {
	const [list, setList] = useState(TODO_LIST);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="new" element={<TaskAdd />} />
					<Route path="edit/:id" element={<TaskEdit />} />
					<Route path="delete/:id" element={<TaskDelete />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
