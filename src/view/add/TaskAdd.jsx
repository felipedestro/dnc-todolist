import { useNavigate, useOutletContext } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal/modal";
import Form from "../../components/Form/Form";
import "./TaskAdd.scss";

function TaskAdd({ list, reloadList }) {
	const [modalOpen, setModalOpen] = useState(false);
	const [sizeList, setSizeList] = useOutletContext();
	const navigate = useNavigate();

	const cancel = () => {
		setModalOpen(!modalOpen);
		navigate("/");
	};

	useEffect(() => {
		setModalOpen(true);
	}, []);

	function handleAddList(data) {
		const AddNewList = [...list];
		AddNewList.push({
			id: sizeList + 1,
			title: data.title,
			description: data.description,
			completed: data.completed,
		});

		setSizeList((size) => size + 1);
		setModalOpen(!modalOpen);
		reloadList(AddNewList);
	}
	if (modalOpen) {
		return (
			<>
				<Modal>
					<div className="TaskAdd">
						<h1>Adicionar uma nova tarefa: </h1>
						<Form onSubmit={handleAddList} cancel={cancel} />
					</div>
				</Modal>
			</>
		);
	} else {
		return null;
	}
}

export default TaskAdd;
