import React from 'react';
import './index.scss';
import { PropTypes } from "prop-types";

const Turtle = ({width, height, style}) => {
  Turtle.propTypes = {
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
        <div className="turtleContainer" style={style}>
            <div className="wholeTurtle">
                <div className="leftPart">
                    <div className="shell">
                        <div className="upperShell"/>
                        <div className="lowerShell"/>
                    </div>
                    <div className="bottom">
                        <div className="skin leg short"/>
                        <div className="skin leg long"/>
                        <div className="skin leg long"/>
                        <div className="skin leg short"/>
                    </div>
                </div>
                <div className="head">
                    <div className="skin neck"/>
                    <div className="skin face">
                        <div className="eye"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Turtle;
