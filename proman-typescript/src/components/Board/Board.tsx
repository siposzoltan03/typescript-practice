import React from 'react';
import './Board.css';

export default function Board() {
    return (
        <section className="board">
            <div className="board-header"><span className="board-title">Board 1</span>
                <button className="board-add">Add Card</button>
                <button className="board-toggle"><i className="fas fa-chevron-down"></i></button>
            </div>
            </section>
    )
}
