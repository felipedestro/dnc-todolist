import { useNavigate, useOutletContext } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal/modal";
import Button from "../../components/Button/button";
import "./TaskAdd.scss";

function TaskAdd({ list, reloadList }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [completed, setCompleted] = useState(false);

	const [ModalOpen, setModalOpen] = useState(false);
	const [sizeList, setSizeList] = useOutletContext();
	const navigate = useNavigate();

	const cancel = () => {
		setModalOpen(!ModalOpen);
		navigate("/");
	};

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
		setModalOpen(!ModalOpen);
		reloadList(AddNewList);
	}
	if (ModalOpen) {
		return (
			<>
				<Modal>
					<div className="TaskAdd">
						<h1>Adicionar uma nova tarefa: </h1>
						<form onSubmit={handleAddList}>
							<label htmlFor="title">Título:</label>
							<input
								type="text"
								id="title"
								value={title}
								required
								onChange={(e) => setTitle(e.target.value)}
							/>
							<label htmlFor="description">Descrição:</label>
							<input
								type="text"
								id="description"
								value={description}
								required
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
							<div className="TaskAdd__actions">
								<Button
									text={"Cancelar"}
									className={"buttonA"}
									click={cancel}
								/>
								<Button text={"Salvar"} className={"buttonB"} type={"submit"} />
							</div>
						</form>
					</div>
				</Modal>
			</>
		);
	} else {
		return null;
	}
}

export default TaskAdd;
