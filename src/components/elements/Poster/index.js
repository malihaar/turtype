import React, {useEffect, useState} from 'react';
import './index.scss';
import { PropTypes } from "prop-types";
import WordCompletionEvent from "../../../events/WordCompletionEvent";

const Poster = ({width, height, content, style}) => {

 Poster.propTypes = {
    content: PropTypes.string.isRequired,
    width: PropTypes.oneOf([...new Array(100)].map((_, i) => i + 1)),
    height: PropTypes.oneOf([...new Array(100)].map((_, i) => i + 1)),
    style: PropTypes.object,
  };

style = {
  ...style,
  width: `${width}vw`,
  height: `${height}vh`,
 
};

    const [displayedContent, setDisplayedContent] = useState([...content])

    useEffect(() => {
        document.addEventListener(WordCompletionEvent.NAME, () => {
            content.shift()
            setDisplayedContent([...content])
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
