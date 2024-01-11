import React, { useEffect, useState } from "react";
import { TODO_LIST } from "../mock/todo.list";
import Button from "../components/button";
import DeleteItem from "./deleteItem";

function Home() {
	const [list, setList] = useState(TODO_LIST);
	const [sizeList, setSizeList] = useState(list.length);
	const [listUpdate, setListUpdate] = useState([]);
	const [deleteOpen, setDeleteOpen] = useState(false);
	const [deleteItem, setDeleteItem] = useState();

	const reoladList = function (newList) {
		setList(newList);
	};

	function getList(itemID) {
		const getItem = list.find((item) => item.id == itemID);
		let title = document.getElementById("editTitle");
		let description = document.getElementById("editDescription");
		let completed = document.getElementById("editCompleted");

		title.value = getItem.title;
		description.value = getItem.description;
		completed.checked = getItem.completed;
		setListUpdate(getItem);
	}

	function addList() {
		let title = document.getElementById("title");
		let description = document.getElementById("description");
		let completed = document.getElementById("completed");

		const AddNewList = list.slice(0, list.length);
		AddNewList.push({
			id: sizeList + 1,
			title: title.value,
			description: description.value,
			completed: completed.checked,
		});

		title.value = "";
		description.value = "";
		completed.checked = false;
		setSizeList(sizeList + 1);
		reoladList(AddNewList);
	}

	function updateList() {
		let title = document.getElementById("editTitle");
		let description = document.getElementById("editDescription");
		let completed = document.getElementById("editCompleted");

		if (
			listUpdate.title === title.value &&
			listUpdate.description === description.value &&
			listUpdate.completed === completed.checked
		) {
			alert("Altere ao menos uma das unidades, ou clique em cancelar");
		} else {
			const addNewList = list.splice(0, list.length);
			addNewList[listUpdate.id] = {
				id: listUpdate.id + 1,
				title: title.value,
				description: description.value,
				completed: completed.checked,
			};

			reoladList(addNewList);
			title.value = "";
			description.value = "";
			completed.checked = false;
		}
	}

	function deleteList(item) {
		const AddNewList = list.slice(0, list.length);
		AddNewList.splice(item, 1);
		reoladList(AddNewList);
		setInterval(() => {
			setDeleteOpen(false);
		}, 300);
	}

	return (
		<div className="home">
			<div>
				{/* <form>
					<input type="text" id="title" /> <br /> <br />
					<input type="text" id="description" /> <br /> <br />
					<input type="checkbox" id="completed" />
				</form>
				<button onClick={addList}>Salvar</button> */}
			</div>
			<div>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Título</th>
							<th>Descrição</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{list.map((item, index) => (
							<tr key={index}>
								<td>{item.id}</td>
								<td>{item.title}</td>
								<td>{item.description}</td>
								<td>{item.completed.toString()}</td>
								<td>
									<button
										onClick={() => {
											getList(item.id);
										}}>
										Edit
									</button>
									<button
										onClick={() => {
											setDeleteItem(index);
											setDeleteOpen(true);
										}}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div>
				{/* <form>
					<input type="text" id="editTitle" /> <br /> <br />
					<input type="text" id="editDescription" /> <br /> <br />
					<input type="checkbox" id="editCompleted" />
				</form>
				<button onClick={updateList}>Salvar</button> */}
			</div>
			<DeleteItem isOpen={deleteOpen}>
				<Button
					text={"Não"}
					className={"buttonA"}
					onClick={() => setDeleteOpen(false)}
				/>
				<Button
					text={"Sim"}
					className={"buttonB"}
					onClick={() => deleteList(deleteItem)}
				/>
			</DeleteItem>
		</div>
	);
}

export default Home;
