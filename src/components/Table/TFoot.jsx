import React from "react";

import iconMore from "../../assets/more.svg";

function TFoot() {
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
