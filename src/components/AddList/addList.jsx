import React, { useState } from "react";
import Modal from "../modal";
import Button from "../button";

function AddList({ AddisOpen, addIsClose, list, sizeList, increment, isAdd }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [completed, setCompleted] = useState(false);

	function handleAddList() {
		const AddNewList = [...list];
		AddNewList.push({
			id: sizeList + 1,
			title: title,
			description: description,
			completed: completed,
		});

		setTitle("");
		setDescription("");
		setCompleted(false);
		increment(1);
		isAdd(AddNewList);
	}
	if (AddisOpen) {
		return (
			<>
				<Modal>
					<div className="addList">
						<form>
							<input
								type="text"
								id="title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>{" "}
							<br /> <br />
							<input
								type="text"
								id="description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>{" "}
							<br /> <br />
							<input
								type="checkbox"
								id="completed"
								value={completed}
								onChange={(e) => setCompleted(e.target.checked)}
							/>
						</form>
						<Button
							text={"Cancelar"}
							className={"buttonA"}
							onClick={addIsClose}
						/>
						<Button
							text={"Salvar"}
							className={"buttonB"}
							onClick={() => {
								handleAddList();
								addIsClose();
							}}
						/>
					</div>
				</Modal>
			</>
		);
	} else {
		return null;
	}
}

export default AddList;
