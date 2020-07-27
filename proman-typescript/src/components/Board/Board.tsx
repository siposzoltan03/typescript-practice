import React from 'react';
import './Board.css';
import BoardColumn from '../BoardColumn/BoardColumn';

interface Props{
    children: React.ReactNode,
}

export default function Board<Props>() {
    return (
        <section className="board">
            <div className="board-header"><span className="board-title">Board 1</span>
                <button className="board-add">Add Card</button>
                <button className="board-toggle"><i className="fas fa-chevron-down"></i></button>
            </div>
            <div className="board-columns">
                <BoardColumn title="New" />
                <BoardColumn title="In Progress" />
                <BoardColumn title="Testing" />
                <BoardColumn title="Done" />
            </div>
            </section>
    )
}
