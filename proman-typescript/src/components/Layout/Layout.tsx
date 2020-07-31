import React, { Children, useContext, ContextType, useState } from "react";
import "./Layout.css";
import Board from "../Board/Board";
import { DataContext } from "../../data/dataContext";
import { boards, columns, cards, board } from "../../data/dataObject";
import { utils } from "../../utils/utils";

interface Props {
	children: React.ReactNode;
}

export default function Layout<Props>(): JSX.Element {
	// const dataContext = useContext(DataContext);
	// const boards = dataContext?.boards;
	// const lists = dataContext?.lists;

	const [boardsState, setBoardsState] = useState<board[]>(boards);

	const handleAddBoard = () => {
		const newBoardsState = [...boardsState];
		const newBoard: board = {
			id: utils.generateId(boardsState),
			title: `Board ${utils.generateId(boardsState)}`,
			columnIds: [1, 2, 3, 4],
		};
		newBoardsState.push(newBoard);
		setBoardsState(newBoardsState);
	};
	return (
		<div className="container">
			<div className="title-line">
				<div className="title">Proman</div>
				<button className="add-board" onClick={handleAddBoard}>
					Add Board
				</button>
			</div>
			<div className="board-container">
				{boardsState?.map((board, index: number) => {
					return (
						<Board
							key={index}
							boardName={board.title}
							boardColumnIds={board.columnIds}
							boardId={board.id}
						/>
					);
				})}
			</div>
		</div>
	);
}
