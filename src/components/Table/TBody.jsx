import React from "react";

import iconCompleted from "../../assets/completed.svg";
import iconNoCompleted from "../../assets/no_completed_black.svg";

function TBody({ list, id }) {
	const getList = [...list];
	let item = getList.find((e) => e.id == id);
	return (
		<tbody>
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
		</tbody>
	);
}

export default TBody;
