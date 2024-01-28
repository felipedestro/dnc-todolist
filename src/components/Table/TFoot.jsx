import React from "react";

import iconMore from "../../assets/more.svg";
import { useNavigate } from "react-router-dom";

function TFoot() {
	const navigate = useNavigate();

	return (
		<tfoot>
			<tr>
				<td>Adicionar tarefa...</td>
				<td></td>
				<td></td>
				<td>
					<button onClick={() => navigate("/add")}>
						<img src={iconMore} alt="icon more" />
					</button>
				</td>
			</tr>
		</tfoot>
	);
}

export default TFoot;
