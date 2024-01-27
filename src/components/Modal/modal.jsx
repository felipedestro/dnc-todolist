import React, { useEffect, useState } from "react";
import "./modal.scss";

function Modal({ children }) {
	return (
		<div className="modal modal-in">
			<div className="modal__container">{children}</div>
		</div>
	);
}

export default Modal;
