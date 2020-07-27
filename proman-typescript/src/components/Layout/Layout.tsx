import React, { Children } from 'react';
import './Layout.css';
import Board from '../Board/Board';

interface Props{
    children: React.ReactNode,

}

export default function Layout<Props>(): JSX.Element {
    return (
        <div>
            <h1>Proman</h1>
            <div className="board-container"></div>
            <Board/>
        </div>
    )
}
