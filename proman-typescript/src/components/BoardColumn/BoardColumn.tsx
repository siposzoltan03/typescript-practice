import React from 'react'
import './BoardColumn.css'

type Props = {
    children?: React.ReactNode,
    title: string
}

const BoardColumn = ({children, title}: Props): JSX.Element => {
    return (
                <div className="board-column">
                <div className="board-column-title">{title}</div>
                    <div className="board-column-content">
                        {children}
                    </div>
                </div>
    
    )
}

export default BoardColumn;
