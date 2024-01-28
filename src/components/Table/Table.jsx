import "./Table.scss";
import { useNavigate } from "react-router-dom";
import THead from "./THead";
import TBodyAction from "./TBodyAction";
import TFoot from "./TFoot";

function Table({ list }) {
	const navigate = useNavigate();

	return (
		<>
			<div className="Table">
				<table className="Table__main">
					<THead inTable={true} />
					<TBodyAction list={list} inTable={true} />
					<TFoot />
				</table>
			</div>
		</>
	);
}

export default Table;
