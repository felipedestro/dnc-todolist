import React, { useState } from "react";
import Modal from "../../components/Modal/modal";
import Button from "../../components/Button/button";
import "./TaskAdd.scss";

function TaskAdd({ AddisOpen, addIsClose, list, sizeList, increment, isAdd }) {
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
					<div className="TaskAdd">
						<h1>Adicionar uma nova tarefa: </h1>
						<form>
							<label htmlFor="title">Título:</label>
							<input
								type="text"
								id="title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
							<label htmlFor="description">Descrição:</label>
							<input
								type="text"
								id="description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
							<span>
								<label htmlFor="completed">Concluído:</label>
								<input
									type="checkbox"
									id="completed"
									value={completed}
									onChange={(e) => setCompleted(e.target.checked)}
								/>
							</span>
						</form>
						<div className="TaskAdd__actions">
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
					</div>
				</Modal>
			</>
		);
	} else {
		return null;
	}
}

export default TaskAdd;
