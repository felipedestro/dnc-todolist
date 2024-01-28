import Modal from "../../components/Modal/modal";
import Button from "../../components/Button/button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import THead from "../../components/Table/THead";
import TBody from "../../components/Table/TBody";
import "./TaskDelete.scss";

function TaskDelete({ list, reloadList }) {
	const { id } = useParams();
	const navigate = useNavigate();
	const [modalOpen, setModalOpen] = useState(false);

	const getList = [...list];
	const item = getList.find((element) => element.id == id);

	useEffect(() => {
		setModalOpen(true);
	}, []);

	function handleDeleteList(id) {
		const itemList = list.findIndex((item) => item.id == id);
		const AddNewList = [...list];
		AddNewList.splice(itemList, 1);
		reloadList(AddNewList);
	}

	if (modalOpen) {
		return (
			<Modal>
				<div className="taskDelete">
					<div className="taskDelete__messagem">
						<h1>Deseja relamente deletar esse item?</h1>
						<div className="taskDelete__table">
							<table>
								<THead />
								<TBody list={list} id={id} />
							</table>
						</div>
					</div>
					<div className="taskDelete__actions">
						<Button
							text={"Não"}
							className={"buttonA"}
							click={() => {
								setModalOpen(!modalOpen);
								navigate("/");
							}}
						/>
						<Button
							text={"Sim"}
							className={"buttonB"}
							click={() => {
								handleDeleteList(id);
								setModalOpen(!modalOpen);
								navigate("/");
							}}
						/>
					</div>
				</div>
			</Modal>
		);
	} else {
		return null;
	}
}

export default TaskDelete;
