import { useState } from "react";
import DeleteList from "../DeleteList/deleteList";
import UpdateList from "../UpdateLIst/updateList";
import "./tableList.scss";
import iconEdit from "../../assets/edit.svg";
import iconDelete from "../../assets/delete.svg";
import iconMore from "../../assets/more.svg";
import iconCompleted from "../../assets/complted.svg";
import iconNoCompleted from "../../assets/no_completed.svg";

function TableList({ list, handleReoladList, addNew }) {
	const [updateModal, setUpdateModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [index, setIndex] = useState("");
	return (
		<div className="tableList">
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Descrição</th>
						<th>Status</th>
						<th>Opções</th>
					</tr>
				</thead>
				<tbody>
					{list.map((item, index) => (
						<tr key={index}>
							<td>{item.title}</td>
							<td>{item.description}</td>
							<td>
								{item.completed == true ? (
									<img src={iconCompleted} alt="icon completed" />
								) : (
									<img src={iconNoCompleted} alt="icon no completed" />
								)}
							</td>
							<td>
								<button
									onClick={() => {
										setUpdateModal(true);
										setIndex(item.id);
									}}>
									<img src={iconEdit} alt="icon edit" />
								</button>
								<button
									onClick={() => {
										setDeleteModal(true);
										setIndex(item.id);
									}}>
									<img src={iconDelete} alt="icon delete" />
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td>Adicinoar tarefa...</td>
						<td></td>
						<td></td>
						<td>
							<button onClick={addNew}>
								<img src={iconMore} alt="icon more" />
							</button>
						</td>
					</tr>
				</tfoot>
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
			<div className="modal-update">
				<UpdateList
					updateIsOpen={updateModal}
					updateIsClose={() => setUpdateModal(!updateModal)}
					list={list}
					listItem={index}
					isUpdate={handleReoladList}
				/>
			</div>
		</div>
	);
}

export default TableList;
