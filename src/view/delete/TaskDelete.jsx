import Modal from "../../components/Modal/modal";
import Button from "../../components/Button/button";
import iconCompleted from "../../assets/completed.svg";
import iconNoCompleted from "../../assets/no_completed_black.svg";
import "./TaskDelete.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TaskDelete({ list, reloadList }) {
	const { id } = useParams();
	const navigate = useNavigate();
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		setModalOpen(true);
	}, []);

	function handleDeleteList(id) {
		const itemList = list.findIndex((item) => item.id == id);
		const AddNewList = [...list];
		AddNewList.splice(itemList, 1);
		reloadList(AddNewList);
	}

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

	if (modalOpen) {
		return (
			<Modal>
				<div className="taskDelete">
					<div className="taskDelete__messagem">
						<h1>Deseja relamente deletar esse item?</h1>
						<div className="taskDelete__table">
							<table>
								<thead>
									<tr>
										<th>Título</th>
										<th>Descrição</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>{handleVerifyList(id)}</tbody>
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
