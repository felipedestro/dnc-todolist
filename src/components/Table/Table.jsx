import "./Table.scss";
import iconEdit from "../../assets/edit.svg";
import iconDelete from "../../assets/delete.svg";
import iconMore from "../../assets/more.svg";
import iconCompleted from "../../assets/completed.svg";
import iconNoCompleted from "../../assets/no_completed.svg";
import { useNavigate } from "react-router-dom";

function Table({ list, SetUpdateList, SetDeleteList, setIndex }) {
	const navigate = useNavigate();

	return (
		<>
			<div className="Table">
				<table className="Table__main">
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
							</tr>
						))}
					</tbody>
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
				</table>
			</div>
		</>
	);
}

export default Table;
