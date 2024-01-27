import { useNavigate, useOutletContext } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import Modal from "../../components/Modal/modal";
import Button from "../../components/Button/button";
import "./TaskAdd.scss";

function TaskAdd({ list, reloadList }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [completed, setCompleted] = useState(false);

	const [ModalIsOpen, setModalOpen] = useState(false);
	const [sizeList, setSizeList] = useOutletContext();
	const navigate = useNavigate();

	useEffect(() => {
		setModalOpen(true);
	}, []);

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
		setSizeList((size) => size + 1);
		reloadList(AddNewList);
	}
	if (ModalIsOpen) {
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
								onClick={() => {
									setModalOpen(!ModalIsOpen);
									navigate("/");
								}}
							/>
							<Button
								text={"Salvar"}
								className={"buttonB"}
								onClick={() => {
									handleAddList();
									navigate("/");
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
