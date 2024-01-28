import React from "react";

function THead({ inTable }) {
	return (
		<thead>
			<tr>
				<th>Título</th>
				<th>Descrição</th>
				<th>Status</th>
				{inTable == true && <th>Opções</th>}
			</tr>
		</thead>
	);
}

export default THead;
