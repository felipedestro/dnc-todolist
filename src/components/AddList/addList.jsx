import React from "react";
import Modal from "../modal";

function AddList({
	isOpen,
	modalIsOpen,
	list,
	sizeList,
	incrementList,
	isAdd,
}) {
	function handleAddList(listGet) {
		let title = document.getElementById("title");
		let description = document.getElementById("description");
		let completed = document.getElementById("completed");

		const AddNewList = [...listGet];
		AddNewList.push({
			id: sizeList + 1,
			title: title.value,
			description: description.value,
			completed: completed.checked,
		});

		title.value = "";
		description.value = "";
		completed.checked = false;
		incrementList(1);
		isAdd(AddNewList);
	}
	if (isOpen) {
		return (
			<>
				<Modal>
					<div className="addList">
						<form>
							<input type="text" id="title" /> <br /> <br />
							<input type="text" id="description" /> <br /> <br />
							<input type="checkbox" id="completed" />
						</form>
					</div>
				</Modal>
			</>
		);
	} else {
		return null;
	}
}

export default AddList;
