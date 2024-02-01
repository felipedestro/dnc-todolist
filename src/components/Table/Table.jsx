import "./Table.scss";
import THead from "./THead";
import TBodyAction from "./TBodyAction";
import TFoot from "./TFoot";

function Table({ list, reloadList }) {
	return (
		<>
			<div className="Table">
				<table className="Table__main">
					<THead inTable={true} />
					<TBodyAction list={list} inTable={true} reloadList={reloadList} />
					<TFoot />
				</table>
			</div>
		</>
	);
}

export default Table;
