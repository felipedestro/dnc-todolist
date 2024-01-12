import Modal from "../modal";
import Button from "../button";

function DeleteList({ isOpen, setModalIsOpen, list, itemId, isDelete }) {
	function handleDeleteList(id) {
		const itemList = list.findIndex((item) => item.id == id);
		const AddNewList = [...list];
		AddNewList.splice(itemList, 1);
		isDelete(AddNewList);
	}

	if (isOpen) {
		return (
			<Modal>
				<div className="deleteItem">
					<div className="deleteItem__messagem">
						<h1>Deseja relamente deletar esse item?</h1>
					</div>
					<div className="deleteItem__actions">
						<Button
							text={"Sair"}
							className={"buttonA"}
							onClick={setModalIsOpen}
						/>
						<Button
							text={"Salvar"}
							className={"buttonB"}
							onClick={() => {
								handleDeleteList(itemId);
								setModalIsOpen();
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
