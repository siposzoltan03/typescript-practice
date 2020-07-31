import React from "react";
import "./BoardColumn.css";
import { cards } from "../../data/dataObject";
import Card from "../Card/Card";

type Props = {
	title: string;
	cardIds: number[];
	boardId: number;
};

const BoardColumn = ({ title, cardIds, boardId }: Props): JSX.Element => {
	return (
		<div className="board-column">
			<div className="board-column-title">{title}</div>
			<div className="board-column-content">
				{cardIds.map((cardId, index) =>
					cards.map((card) => {
						if (cardId === card.id && card.boardId === boardId) {
							return <Card text={card.title} key={index} />;
						}
					}),
				)}
			</div>
		</div>
	);
};

export default BoardColumn;
