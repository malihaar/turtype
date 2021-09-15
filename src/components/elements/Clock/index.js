import React from 'react';
import './index.scss';
import { PropTypes } from "prop-types";

const Clock = ({ width, height, time, style}) => {

  Clock.propTypes = {
    time: PropTypes.number.isRequired,
    width: PropTypes.oneOf([...new Array(100)].map((_, i) => i + 1)),
    height: PropTypes.oneOf([...new Array(100)].map((_, i) => i + 1)),
    style: PropTypes.object,
  };

style = {
  ...style,
  width: `${width}vh`,
  height: `${height}vh`,
 
};

    return(
        <div className="clockContainer" style={style}>
            <div className="timeContainer">
                <div className="fredokaOne time">{time}</div>
            </div>
        </div>
    )
}

export default Clock;
