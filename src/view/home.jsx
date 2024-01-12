import React, { useState } from "react";
import { TODO_LIST } from "../mock/todo.list";
import TableList from "../components/TableList/tableList";
import AddList from "../components/AddList/addList";

function Home() {
	const [list, setList] = useState(TODO_LIST);
	const [sizeList, setSizeList] = useState(list.length);

	const [addOpen, setAddOpen] = useState(false);

	const handleReoladList = (newList) => {
		setList(newList);
	};

	const handleSetSizeList = (increment) => {
		setSizeList(sizeList + increment);
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

			handleReoladList(addNewList);
			title.value = "";
			description.value = "";
			completed.checked = false;
		}
	}

	function deleteList(item) {
		const AddNewList = list.slice(0, list.length);
		AddNewList.splice(item, 1);
		handleReoladList(AddNewList);
		setDeleteOpen(false);
	}

	return (
		<div className="home">
			<div className="home__table">
				<TableList list={list} handleReoladList={handleReoladList}>
					<tr>
						<td>Adicinoar tarefa...</td>
						<td></td>
						<td></td>
						<td></td>
						<td>
							<button onClick={() => setAddOpen(true)}>+</button>
						</td>
					</tr>
				</TableList>
			</div>
			<div className="home__modal">
				<AddList
					isOpen={addOpen}
					modalIsOpen={() => setAddOpen(!addOpen)}
					list={list}
					sizeList={sizeList}
					incrementList={handleSetSizeList}
					isAdd={handleReoladList}
				/>
			</div>
		</div>
	);
}

export default Home;
