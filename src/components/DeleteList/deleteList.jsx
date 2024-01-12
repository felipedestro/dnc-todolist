import Modal from "../modal";
import Button from "../button";

function DeleteList({ DeleteIsOpen, DeleteIsClose, list, listItem, isDelete }) {
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
				<td>{item.completed.toString()}</td>
			</tr>
		);
	}

	if (DeleteIsOpen) {
		return (
			<Modal>
				<div className="deleteItem">
					<div className="deleteItem__messagem">
						<h1>Deseja relamente deletar esse item?</h1>
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
					<div className="deleteItem__actions">
						<Button
							text={"Não"}
							className={"buttonA"}
							onClick={DeleteIsClose}
						/>
						<Button
							text={"Sim"}
							className={"buttonB"}
							onClick={() => {
								handleDeleteList(listItem);
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

export default DeleteList;
