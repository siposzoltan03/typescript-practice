import React, { useState, Fragment } from "react";
import "./Board.css";
import BoardColumn from "../BoardColumn/BoardColumn";
import Card from "../Card/Card";
import { cards, columns } from "../../data/dataObject";

interface Props {
	boardColumnIds: Array<number>;
	boardName: string;
	boardId: number;
}

const Board = ({ boardColumnIds, boardName, boardId }: Props) => {
	const [hidden, setHidden] = useState<boolean>(false);

	const handleToggle = (): void => {
		hidden ? setHidden(false) : setHidden(true);
	};

	return (
		<section className="board">
			<div className="board-header">
				<span className="board-title">{boardName}</span>
				<button className="board-add">Add Card</button>
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
						columns.map((column, index) => {
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
