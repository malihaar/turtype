import React from 'react';
import './index.scss'

const Poster = ({content, style}) => {
    return (
        <div className="posterContainer" style={style}>
            <div className="tape tape-top"/>
            <div className="contentContainer">
                <div className="content">{content}</div>
            </div>
            <div className="tape tape-bottom"/>
        </div>
    )
}

export default Poster;
