import React from "react";
import "./button.scss";

function Button({ text, type, className, click }) {
	return (
		<button className={className} onClick={click} type={type}>
			{text}
		</button>
	);
}

export default Button;
