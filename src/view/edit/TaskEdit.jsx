import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal/modal";
import { useNavigate, useParams } from "react-router-dom";
import THead from "../../components/Table/THead";
import TBody from "../../components/Table/TBody";
import Form from "../../components/Form/Form";
import "./TaskEdit.scss";

function TaskEdit({ list, reloadList }) {
	const [modalOpen, setModalOpen] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		setModalOpen(true);
	}, []);

	const cancel = () => {
		setModalOpen(!modalOpen);
		navigate("/");
	};

	function handleUpdateList(data) {
		const addNewList = [...list];
		const index = addNewList.findIndex((item) => item.id == id);
		addNewList[index] = {
			id: id,
			title: data.title,
			description: data.description,
			completed: data.completed,
		};
		reloadList(addNewList);
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
						<Form onSubmit={handleUpdateList} cancel={cancel} />
					</div>
				</Modal>
			</>
		);
	} else {
		return null;
	}
}

export default TaskEdit;
