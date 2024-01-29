import React from "react";
import iconEdit from "../../assets/edit.svg";
import iconDelete from "../../assets/delete.svg";
import iconCompleted from "../../assets/completed.svg";
import iconNoCompleted from "../../assets/no_completed.svg";
import { useNavigate } from "react-router-dom";

function TBodyAction({ list, inTable, reloadList }) {
	const navigate = useNavigate();

	function handleUpdateList(data) {
		const addNewList = [...list];
		const index = addNewList.findIndex((item) => item.id == data.id);
		addNewList[index] = {
			id: data.id,
			title: data.title,
			description: data.description,
			completed: !data.completed,
		};
		reloadList(addNewList);
	}

	return (
		<tbody>
			{list.map((item, index) => (
				<tr key={index}>
					<td>{item.title}</td>
					<td>{item.description}</td>
					<td>
						<button
							onClick={() => {
								handleUpdateList(item);
							}}>
							{item.completed == true ? (
								<img src={iconCompleted} alt="icon completed" />
							) : (
								<img src={iconNoCompleted} alt="icon no completed" />
							)}
						</button>
					</td>
					{inTable == true && (
						<td>
							<button
								onClick={() => {
									navigate(`edit/${item.id}`);
								}}>
								<img src={iconEdit} alt="icon edit" />
							</button>
							<button
								onClick={() => {
									navigate(`delete/${item.id}`);
								}}>
								<img src={iconDelete} alt="icon delete" />
							</button>
						</td>
					)}
				</tr>
			))}
		</tbody>
	);
}

export default TBodyAction;
