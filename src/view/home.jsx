import React, { useState } from "react";
import { TODO_LIST } from "../mock/todo.list";
import TableList from "../components/TableList/tableList";
import AddList from "../components/AddList/addList";

function Home() {
	const [list, setList] = useState(TODO_LIST);
	const [sizeList, setSizeList] = useState(list.length);

	const [addOpen, setAddOpen] = useState(false);

	const handleReoladList = (newList) => {
		setList(newList);
	};

	const handleSetSizeList = (increment) => {
		setSizeList(sizeList + increment);
	};

	return (
		<div className="home">
			<div className="home__table">
				<TableList list={list} handleReoladList={handleReoladList}>
					<tr>
						<td>Adicinoar tarefa...</td>
						<td></td>
						<td></td>
						<td></td>
						<td>
							<button onClick={() => setAddOpen(true)}>+</button>
						</td>
					</tr>
				</TableList>
			</div>
			<div className="home__modal">
				<AddList
					AddisOpen={addOpen}
					addIsClose={() => setAddOpen(!addOpen)}
					list={list}
					sizeList={sizeList}
					increment={handleSetSizeList}
					isAdd={handleReoladList}
				/>
			</div>
		</div>
	);
}

export default Home;
