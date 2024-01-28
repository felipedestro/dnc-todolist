import React, { useState } from "react";
import Button from "../Button/button";
import "./Form.scss";

function Form({ onSubmit, cancel }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [completed, setCompleted] = useState(false);

	const setData = () => {
		const data = {
			title: title,
			description: description,
			completed: completed,
		};
		onSubmit(data);
		setTitle("");
		setDescription("");
		setCompleted(true);
	};

	return (
		<form onSubmit={setData}>
			<label htmlFor="title">Título:</label>
			<input
				type="text"
				id="title"
				value={title}
				required
				onChange={(e) => setTitle(e.target.value)}
			/>
			<label htmlFor="description">Descrição:</label>
			<input
				type="text"
				id="description"
				value={description}
				required
				onChange={(e) => setDescription(e.target.value)}
			/>
			<span>
				<label htmlFor="completed">Concluído:</label>
				<input
					type="checkbox"
					id="completed"
					value={completed}
					onChange={(e) => setCompleted(e.target.checked)}
				/>
			</span>
			<div className="actions">
				<Button text={"Cancelar"} className={"buttonA"} click={cancel} />
				<Button text={"Salvar"} className={"buttonB"} type={"submit"} />
			</div>
		</form>
	);
}

export default Form;
