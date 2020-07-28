import React, { Children } from 'react';
import './Layout.css';
import Board from '../Board/Board';

interface Props{
    children: React.ReactNode,

}

export default function Layout<Props>(): JSX.Element {
    return (
        <div className="container">
            <div className="title-line">
                <div className="title">Proman</div>
                <button className="add-board">Add Board</button>
                </div>
            <div className="board-container">
                <Board />
            </div>
        </div>
    )
}
