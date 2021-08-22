import React from "react";
import "./index.scss";

const Bowl = ({ wpm, style }) => {
  return (
    <div className="bowlContainer" style={style}>
      <div className="wholeBowl">
        <div className="bowl">
          <div className="topCircle bowlColor" />
          <div className="rectangle bowlColor" >
            <div className="wpm">
              <div className="counter">{ wpm }</div>
              <div className="label">wpm</div>
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
