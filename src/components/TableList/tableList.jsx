import { useState } from "react";
import DeleteList from "../DeleteList/deleteList";
import UpdateList from "../UpdateLIst/updateList";

function TableList({ list, handleReoladList, children }) {
	const [updateModal, setUpdateModal] = useState(false);
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
								<button
									onClick={() => {
										setUpdateModal(true);
										setIndex(item.id);
									}}>
									edit
								</button>
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
			<div className="modal-delete">
				<DeleteList
					DeleteIsOpen={deleteModal}
					DeleteIsClose={() => setDeleteModal(!deleteModal)}
					list={list}
					listItem={index}
					isDelete={handleReoladList}
				/>
			</div>
			<div className="moda-update">
				<UpdateList
					updateIsOpen={updateModal}
					updateIsClose={() => setUpdateModal(!updateModal)}
					list={list}
					listItem={index}
					isUpdate={handleReoladList}
				/>
			</div>
		</>
	);
}

export default TableList;
