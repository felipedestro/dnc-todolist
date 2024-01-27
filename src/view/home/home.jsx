import React, { useState } from "react";
import { TODO_LIST } from "../../mock/todo.list";
import Table from "../../components/Table/Table";
import "./home.scss";

function Home() {
	const [list, setList] = useState(TODO_LIST);
	const [sizeList, setSizeList] = useState(list.length);
	const [index, setIndex] = useState("");

	const [addOpen, setAddOpen] = useState(false);
	const [updateModal, setUpdateModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);

	const handleReoladList = (newList) => {
		setList(newList);
	};

	const handleSetSizeList = (increment) => {
		setSizeList(sizeList + increment);
	};

	const getIndex = () => {
		return index;
	};

	return (
		<>
			<div className="home">
				<h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

				<Table
					list={list}
					SetAddNew={() => setAddOpen(true)}
					SetUpdateList={() => setUpdateModal(true)}
					SetDeleteList={() => setDeleteModal(true)}
					setIndex={setIndex}
				/>
			</div>
		</>
	);
}

export default Home;
