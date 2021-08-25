import "./index.scss";
import { PropTypes } from "prop-types";
import WordCompletionEvent from "../../../events/WordCompletionEvent";

function Button({content,style}) {
  Button.propTypes = {
      content: PropTypes.string.isRequired,
      style: PropTypes.object
  };

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
