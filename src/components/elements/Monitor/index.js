import React from 'react';
import './index.scss'

const Monitor = ({content, style}) => {
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
