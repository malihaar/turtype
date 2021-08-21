import React from 'react'
import './index.scss'

const Clock = ({time, style}) => {
    return(
        <div className="clockContainer" style={style}>
            <div className="timeContainer">
                <div className="time">{time}</div>
            </div>
        </div>
    )
}

export default Clock;
