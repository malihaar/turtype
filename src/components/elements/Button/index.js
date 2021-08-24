import "./index.scss";
import { PropTypes } from "prop-types";




function Button({content,style}) {
  Button.propTypes = {
      content: PropTypes.string.isRequired,
      style: PropTypes.object
  };

  return (
    <div className="button-container fredokaOne" style={style}>
      <h6>{content}</h6>
    </div>
  );
}

export default Button;
