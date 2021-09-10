import "./index.scss";
import {PropTypes} from "prop-types";
import WordCompletionEvent from "../../../events/WordCompletionEvent";

function Button({content, style, width, height, color}) {
    Button.propTypes = {
        content: PropTypes.string.isRequired,
        width: PropTypes.oneOf([...(new Array(100))].map((_, i) => i + 1)),
        height: PropTypes.oneOf([...(new Array(100))].map((_, i) => i + 1)),
        color: PropTypes.string,
        style: PropTypes.object
    };

    style = {...style, width: `${width}vw`, height: `${height}vh`, backgroundColor: color}

    const click = () => {
        document.dispatchEvent(new WordCompletionEvent())
    }

    return (
        <div className="buttonContainer fredokaOne" style={style} onClick={click}>
            <h6>{content}</h6>
        </div>
    );
}

export default Button;
