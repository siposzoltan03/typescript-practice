import React, { Children, useContext, ContextType } from "react";
import "./Layout.css";
import Board from "../Board/Board";
import { DataContext } from "../../data/dataContext";
import { boards, columns, cards } from "../../data/dataObject";

interface Props {
	children: React.ReactNode;
}

export default function Layout<Props>(): JSX.Element {
	// const dataContext = useContext(DataContext);
	// const boards = dataContext?.boards;
	// const lists = dataContext?.lists;

	return (
		<div className="container">
			<div className="title-line">
				<div className="title">Proman</div>
				<button className="add-board">Add Board</button>
			</div>
			<div className="board-container">
				{boards?.map((board, index: number) => {
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
