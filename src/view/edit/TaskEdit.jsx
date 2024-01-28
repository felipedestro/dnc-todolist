import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal/modal";
import Button from "../../components/Button/button";
import { useNavigate, useParams } from "react-router-dom";
import THead from "../../components/Table/THead";
import TBody from "../../components/Table/TBody";
import "./TaskEdit.scss";

function TaskEdit({ list, reloadList }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [completed, setCompleted] = useState(false);

	const [modalOpen, setModalOpen] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		setModalOpen(true);
	}, []);

	function handleUpdateList() {
		const addNewList = [...list];
		const index = addNewList.findIndex((item) => item.id == id);
		addNewList[index] = {
			id: id,
			title: title,
			description: description,
			completed: completed,
		};
		reloadList(addNewList);
		setTitle("");
		setDescription("");
		setModalOpen(!modalOpen);
		navigate("/");
	}

	if (modalOpen) {
		return (
			<>
				<Modal>
					<div className="taskEdit">
						<div className="taskEdit__messagem">
							<div className="taskEdit__table">
								<h1>Item selecionado para alteração: </h1>
								<table>
									<THead />
									<TBody list={list} id={id} />
								</table>
							</div>
						</div>
						<div className="taskEdit__form">
							<div>
								<h4>Digite os novos valores: </h4>
								<form onSubmit={handleUpdateList}>
									<div>
										<input
											type="text"
											id="title"
											placeholder="Título"
											value={title}
											required
											onChange={(e) => setTitle(e.target.value)}
										/>
										<input
											type="text"
											id="description"
											placeholder="Descrição"
											value={description}
											required
											onChange={(e) => setDescription(e.target.value)}
										/>
									</div>
									<span>
										<label htmlFor="completed">Concluído: </label>
										<input
											type="checkbox"
											id="completed"
											value={completed}
											onChange={(e) => setCompleted(e.target.checked)}
										/>
									</span>
									<div className="taskEdit__actions">
										<Button
											text={"Sair"}
											className={"buttonA"}
											click={() => {
												setModalOpen(!modalOpen);
												navigate("/");
											}}
										/>
										<Button
											text={"Salvar"}
											className={"buttonB"}
											type={"submit"}
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</Modal>
			</>
		);
	} else {
		return null;
	}
}

export default TaskEdit;
