import React, { useState } from "react";
import Table from "../../components/Table/Table";
import "./home.scss";
import { Outlet } from "react-router-dom";

function Home({ list, reloadList }) {
	const [sizeList, setSizeList] = useState(list.length);

	return (
		<>
			<div className="home">
				<h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

				<Table list={list} reloadList={reloadList} />
			</div>
			<Outlet context={[sizeList, setSizeList]} />
		</>
	);
}

export default Home;
