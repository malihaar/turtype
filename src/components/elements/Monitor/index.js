import React from 'react';
import './index.scss';
import {PropTypes} from "prop-types";

const Monitor = ({width, height,content, style}) => {

 Monitor.propTypes = {
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
    return (
        <div className="monitorContainer" style={style}>
            <div className="wholeMonitor">
                <div className="topPart monitorColor">
                    <div className="screen">
                        <div className="contentContainer">
                            <div className="content">{content}</div>
                        </div>
                    </div>
                </div>
                <div className="stand">
                    <div className="monitorColor vertical"/>
                    <div className="horizontal">
                        <div className="monitorColor leftPart"/>
                        <div className="monitorColor centerPart"/>
                        <div className="monitorColor rightPart"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Monitor;
