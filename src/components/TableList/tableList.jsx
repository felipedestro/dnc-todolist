import { useState } from "react";
import DeleteList from "../DeleteList/deleteList";

function TableList({ list, handleReoladList, children }) {
	const [deleteModal, setDeleteModal] = useState(false);
	const [index, setIndex] = useState("");
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Título</th>
						<th>Descrição</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{list.map((item, index) => (
						<tr key={index}>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td>{item.description}</td>
							<td>{item.completed.toString()}</td>
							<td>
								<button>edit</button>
								<button
									onClick={() => {
										setDeleteModal(true);
										setIndex(item.id);
									}}>
									delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>{children}</tfoot>
			</table>
			<DeleteList
				isOpen={deleteModal}
				setModalIsOpen={() => setDeleteModal(!deleteModal)}
				list={list}
				itemId={index}
				isDelete={handleReoladList}
			/>
		</>
	);
}

export default TableList;
