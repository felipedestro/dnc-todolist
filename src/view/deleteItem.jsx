import React, { useState } from "react";
import Modal from "../components/modal";

function DeleteItem({ isOpen, children }) {
	if (isOpen) {
		return (
			<Modal>
				<div className="deleteItem">
					<div className="deleteItem__messagem">
						<h1>Deseja relamente deletar esse item?</h1>
					</div>
					<div className="deleteItem__actions">{children}</div>
				</div>
			</Modal>
		);
	} else {
		return null;
	}
}

export default DeleteItem;
