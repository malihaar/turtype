import "./index.scss";
import { PropTypes } from "prop-types";

function Button({content,style}) {
  Button.propTypes = {
      content: PropTypes.string.isRequired,
      style: PropTypes.object
  };

  const click = () => {
      const event = new CustomEvent('penis', {size: '20cm'})
      document.dispatchEvent(event)
  }

  return (
    <div className="buttonContainer fredokaOne" style={style} onClick={click}>
      <h6>{content}</h6>
    </div>
  );
}

export default Button;
