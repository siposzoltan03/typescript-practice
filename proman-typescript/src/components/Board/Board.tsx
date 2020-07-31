import React, { useState, Fragment } from "react";
import "./Board.css";
import BoardColumn from "../BoardColumn/BoardColumn";
import Card from "../Card/Card";
import { cards, columns } from "../../data/dataObject";
import { utils } from "../../utils/utils";

interface Props {
	boardColumnIds: Array<number>;
	boardName: string;
	boardId: number;
}

const FIRST_COLUMN = 0;

const Board = ({ boardColumnIds, boardName, boardId }: Props) => {
	const [hidden, setHidden] = useState<boolean>(false);
	const [columnsState, setColumnsState] = useState(columns);
	const [cardsState, setCardsState] = useState(cards);

	const handleToggle = (): void => {
		hidden ? setHidden(false) : setHidden(true);
	};

	const handleAddCard = (): void => {
		const newCard = {
			id: utils.generateId(cards),
			title: "New Card",
			boardId: boardId,
		};
		cards.push(newCard);
		const newColumnsState = [...columnsState];
		newColumnsState[FIRST_COLUMN].cardIds.push(newCard.id);
		setColumnsState(newColumnsState);
	};

	return (
		<section className="board">
			<div className="board-header">
				<span className="board-title">{boardName}</span>
				<button className="board-add" onClick={handleAddCard}>
					Add Card
				</button>
				<button className="board-toggle" onClick={handleToggle}>
					<i
						className={
							hidden ? "fas fa-chevron-down" : "fas fa-chevron-up"
						}
					></i>
				</button>
			</div>
			{hidden ? (
				<Fragment></Fragment>
			) : (
				<div className="board-columns">
					{boardColumnIds.map((columnId) =>
						columnsState.map((column, index) => {
							if (columnId === column.id)
								return (
									<BoardColumn
										title={column.title}
										cardIds={column.cardIds}
										boardId={boardId}
										key={index}
									/>
								);
						}),
					)}
				</div>
			)}
		</section>
	);
};

export default Board;
