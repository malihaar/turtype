import React from "react";
import "./index.scss";

function Table({style}) {
    return (
        <div className="tableContainer" style={style}>
            <div className="wholeTable">
                <div className="tableColor board"/>
                <div className="bottom">
                    <div className="tableColor foot leftFoot"/>
                    <div className="tableColor foot rightFoot"/>
                </div>
            </div>
        </div>
    );
}

export default Table;
