import Modal from "../../components/Modal/modal";
import Button from "../../components/Button/button";
import iconCompleted from "../../assets/completed.svg";
import iconNoCompleted from "../../assets/no_completed_black.svg";
import "./TaskDelete.scss";

function TaskDelete({ DeleteIsOpen, DeleteIsClose, list, listItem, isDelete }) {
	function handleDeleteList(id) {
		const itemList = list.findIndex((item) => item.id == id);
		const AddNewList = [...list];
		AddNewList.splice(itemList, 1);
		isDelete(AddNewList);
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

	if (DeleteIsOpen) {
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
								<tbody>{handleVerifyList(listItem())}</tbody>
							</table>
						</div>
					</div>
					<div className="taskDelete__actions">
						<Button
							text={"Não"}
							className={"buttonA"}
							onClick={DeleteIsClose}
						/>
						<Button
							text={"Sim"}
							className={"buttonB"}
							onClick={() => {
								handleDeleteList(listItem());
								DeleteIsClose();
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
