import React, { useState } from "react";
import { TODO_LIST } from "../mock/todo.list";
import TableList from "../components/TableList/tableList";
import AddList from "../components/AddList/addList";

import "./home.scss";

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
			<h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

			<TableList
				list={list}
				handleReoladList={handleReoladList}
				addNew={() => setAddOpen(true)}
			/>

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
