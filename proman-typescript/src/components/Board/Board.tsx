import React, { useState, Fragment, ChangeEvent } from "react";
import "./Board.css";
import BoardColumn from "../BoardColumn/BoardColumn";
import Card from "../Card/Card";
import { cards, columns, column, boards, board } from "../../data/dataObject";
import { utils } from "../../utils/utils";

interface Props {
	boardColumnIds: Array<number>;
	boardName: string;
	boardId: number;
}

const FIRST_COLUMN = 0;

const Board = ({ boardColumnIds, boardName, boardId }: Props) => {
	const [hidden, setHidden] = useState<boolean>(false);
	const [columnsState, setColumnsState] = useState<column[]>(columns);
	const [cardsState, setCardsState] = useState(cards);
	const [editName, setEditName] = useState<boolean>(false);
	const [boardsState, setBoardsState] = useState<board[]>(boards);
	const [boardNameState, setBoardNameState] = useState<string>(boardName);

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

	const handleEditName = (): void => {
		setEditName(!editName);
	};

	const handleNameChange = (
		boardId: number,
		e: ChangeEvent<HTMLInputElement>,
	): void => {
		const newBoardsState = [...boardsState];
		setBoardNameState(e.target.value);
		newBoardsState[boardId - 1].title = boardNameState;
		setBoardsState(newBoardsState);
	};

	return (
		<section className="board">
			<div className="board-header">
				{editName ? (
					<input
						className="board-title"
						onBlur={handleEditName}
						type="text"
						autoFocus
						value={boardNameState}
						onChange={(e) => handleNameChange(boardId, e)}
					></input>
				) : (
					<span
						className="board-title"
						onDoubleClick={handleEditName}
					>
						{boardNameState}
					</span>
				)}

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
