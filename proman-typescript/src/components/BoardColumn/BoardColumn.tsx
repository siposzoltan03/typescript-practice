import React from "react";
import "./BoardColumn.css";

type Props = {
	cards?: Array<React.ReactNode>;
	title: string;
};

const BoardColumn = ({ cards, title }: Props): JSX.Element => {
	return (
		<div className="board-column">
			<div className="board-column-title">{title}</div>
			<div className="board-column-content">{cards}</div>
		</div>
	);
};

export default BoardColumn;
