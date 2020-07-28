import React from 'react'
import './Card.css'

interface Props{
    text: string
}

const Card =({text}: Props) : JSX.Element => {
    return (
        <div className="card">
            <div className="card-remove"><i className="fas fa-trash-alt"></i></div>
            <div className="card-title">{text}</div>
        </div>
    )
}

export default Card
