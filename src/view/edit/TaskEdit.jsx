import React, { useState } from "react";
import Modal from "../../components/Modal/modal";
import Button from "../../components/Button/button";
import "./TaskEdit.scss";
import iconCompleted from "../../assets/completed.svg";
import iconNoCompleted from "../../assets/no_completed_black.svg";

function TaskEdit({ updateIsOpen, updateIsClose, list, listItem, isUpdate }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [completed, setCompleted] = useState(false);

	function handleVerifyList(id) {
		const getList = [...list];
		let item = getList.find((e) => e.id == id);
		return (
			<tr>
				<td>{item.title}</td>
				<td>{item.description}</td>
				<td>
					{item.completed == true ? (
						<img src={iconCompleted} alt="icon completed" />
					) : (
						<img src={iconNoCompleted} alt="icon completed" />
					)}
				</td>
			</tr>
		);
	}

	function handleUpdateList() {
		const getList = [...list];
		let item = getList.find((e) => e.id == listItem());
		if (completed !== item.completed) {
			const addNewList = [...list];
			const index = addNewList.findIndex((i) => i.id == listItem());
			addNewList[index] = {
				id: listItem(),
				title: item.title,
				description: item.description,
				completed: completed,
			};
			isUpdate(addNewList);
			setTitle("");
			setDescription("");
			setCompleted(false);
		} else {
			if (title !== "" || description !== "") {
				const addNewList = [...list];
				const index = addNewList.findIndex((i) => i.id == listItem());
				addNewList[index] = {
					id: listItem(),
					title: title,
					description: description,
					completed: completed,
				};
				isUpdate(addNewList);
				setTitle("");
				setDescription("");
				setCompleted(false);
			} else {
				alert("Os campos são obrigatórios para a alteração");
				setTitle("");
				setDescription("");
				setCompleted(false);
				updateIsClose;
			}
		}
	}

	if (updateIsOpen) {
		return (
			<>
				<Modal>
					<div className="taskEdit">
						<div className="taskEdit__messagem">
							<div className="taskEdit__table">
								<h1>Item selecionado para alteração: </h1>
								<table>
									<thead>
										<tr>
											<th>Título</th>
											<th>Descrição</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>{handleVerifyList(listItem())}</tbody>
								</table>
							</div>
						</div>
						<div className="taskEdit__form">
							<div>
								<h4>Digite os novos valores: </h4>
								<form>
									<div>
										<input
											type="text"
											id="title"
											placeholder="Título"
											value={title}
											onChange={(e) => setTitle(e.target.value)}
										/>
										<input
											type="text"
											id="description"
											placeholder="Descrição"
											value={description}
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
								</form>
							</div>
							<div className="taskEdit__actions">
								<Button
									text={"Sair"}
									className={"buttonA"}
									onClick={updateIsClose}
								/>
								<Button
									text={"Salvar"}
									className={"buttonB"}
									onClick={() => {
										handleUpdateList();
										updateIsClose();
									}}
								/>
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
