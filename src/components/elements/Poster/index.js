import React, {useEffect, useState} from 'react';
import './index.scss'

const Poster = ({content, style}) => {
    const [displayedContent, setDisplayedContent] = useState([...content])

    useEffect(() => {
        document.addEventListener('penis', () => {
            content.shift()
            setDisplayedContent([...content])
        })
    }, [])

    const getFirstWordToDisplay = () => {
        return displayedContent[0] || ''
    }

    const getRestOfArrayToDisplay = () => {
        return [...displayedContent].filter((v, i) => i !== 0).slice(0, parseInt(process.env.REACT_APP_WORDS_DISPLAYED));
    }

    return (
        <div className="posterContainer" style={style}>
            <div className="tape tape-top"/>
            <div className="contentContainer">
                <div className="openSans content">
                    <span className="firstWord">{`${getFirstWordToDisplay()} `}</span>
                    <span>{getRestOfArrayToDisplay().join(' ')}</span>
                </div>
            </div>
            <div className="tape tape-bottom"/>
        </div>
    )
}

export default Poster;
