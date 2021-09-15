import React from "react";
import { PropTypes } from "prop-types";
import "./index.scss";



const Bowl = ({ width, height, wpm, style }) => {

  Bowl.propTypes = {
    wpm: PropTypes.number.isRequired,
    width: PropTypes.oneOf([...new Array(100)].map((_, i) => i + 1)),
    height: PropTypes.oneOf([...new Array(100)].map((_, i) => i + 1)),
    style: PropTypes.object,
  };

style = {
  ...style,
  width: `${width}vw`,
  height: `${height}vh`,
 
};

  return (
    <div className="bowlContainer" style={style}>
      <div className="wholeBowl">
        <div className="bowl">
          <div className="topCircle bowlColor" />
          <div className="rectangle bowlColor" >
            <div className="wpm">
              <div className="fredokaOne counter">{ wpm }</div>
              <div className="fredokaOne label">wpm</div>
            </div>
          </div>
          <div className="bottomCircle bowlColor" />
        </div>
        <div className="food" />
      </div>
    </div>
  );
};

export default Bowl;
