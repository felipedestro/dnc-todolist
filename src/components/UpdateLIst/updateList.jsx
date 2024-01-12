import React, { useState } from "react";
import Modal from "../modal";
import Button from "../button";

function UpdateList({ updateIsOpen, updateIsClose, list, listItem, isUpdate }) {
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
				<td>{item.completed.toString()}</td>
			</tr>
		);
	}

	function handleUpdateList() {
		const addNewList = [...list];
		const index = addNewList.findIndex((i) => i.id == listItem);
		addNewList[index] = {
			id: listItem,
			title: title,
			description: description,
			completed: completed,
		};

		isUpdate(addNewList);
		setTitle("");
		setDescription("");
		setCompleted(false);
	}

	if (updateIsOpen) {
		return (
			<>
				<Modal>
					<div className="updateList">
						<div className="updateList__messagem">
							<h1>Item selecionado para alteração: </h1>
							<table>
								<thead>
									<tr>
										<th>Título</th>
										<th>Descrição</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>{handleVerifyList(listItem)}</tbody>
							</table>
						</div>
						<div className="updateList__form">
							<div>
								<h4>Digite os novos valores: </h4>
								<form>
									<label htmlFor="title">Título</label>
									<input
										type="text"
										id="title"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									/>
									<label htmlFor="description">Descrição</label>
									<input
										type="text"
										id="description"
										value={description}
										onChange={(e) => setDescription(e.target.value)}
									/>
									<label htmlFor="completed">Status</label>
									<input
										type="checkbox"
										id="completed"
										value={completed}
										onChange={(e) => setCompleted(e.target.checked)}
									/>
								</form>
							</div>
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
				</Modal>
			</>
		);
	} else {
		return null;
	}
}

export default UpdateList;
