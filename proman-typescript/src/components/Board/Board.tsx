import React, { useState } from "react";
import "./Board.css";
import BoardColumn from "../BoardColumn/BoardColumn";
import Card from "../Card/Card";
import { cards } from "../../data/dataObject";

interface Props {
	boardColumns: Array<{ id: number; title: string; cardIds: number[] }>;
	boardName: string;
}

const Board = ({ boardColumns, boardName }: Props) => {
	return (
		<section className="board">
			<div className="board-header">
				<span className="board-title">{boardName}</span>
				<button className="board-add">Add Card</button>
				<button className="board-toggle">
					<i className="fas fa-chevron-down"></i>
				</button>
			</div>
			<div className="board-columns">
				{boardColumns?.map(
					(
						boardColumn: {
							id: number;
							title: string;
							cardIds: number[];
						},
						index: number,
					) => {
						console.log(boardColumn.title);
						return (
							<BoardColumn
								title={boardColumn.title}
								cards={boardColumn.cardIds}
								key={index}
							/>
						);
					},
				)}
			</div>
		</section>
	);
};

export default Board;
