import React, { useState } from 'react'
import './Board.css'
import BoardColumn from '../BoardColumn/BoardColumn'
import Card from '../Card/Card'

interface Props {
    children: React.ReactNode
}

export default function Board<Props>() {
    const [cards, setCards] = useState<string[]>([
        'Card 1',
        'Card 2',
        'Card 3',
        'Card 4',
    ])
    const [columns, setColumns] = useState<string[]>([
        'New',
        'In progress',
        'Testing',
        'Done',
    ])

    return (
        <section className="board">
            <div className="board-header">
                <span className="board-title">Board 1</span>
                <button className="board-add">Add Card</button>
                <button className="board-toggle">
                    <i className="fas fa-chevron-down"></i>
                </button>
            </div>
            <div className="board-columns">
                {columns.map((column, index) => (
                    <BoardColumn
                        key={index}
                        title={column}
                        cards={cards.map((card, index) => (
                            <Card key={index} text={card} />
                        ))}
                    />
                ))}
            </div>
        </section>
    )
}
