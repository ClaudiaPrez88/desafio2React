import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const SocialButton = ({ icon1, icon2, icon3 }) => {
  return (
    <div className="botones-social">
      <Button variant="outline-dark">
        <i className={icon1}></i>
      </Button>
      <Button variant="outline-dark">
        <i className={icon2}></i>
      </Button>
      <Button variant="outline-dark">
        <i className={icon3}></i>
      </Button>
    </div>
  );
};

SocialButton.propTypes = {
  icon1: PropTypes.string,
  icon2: PropTypes.string,
  icon3: PropTypes.string,
};
export default SocialButton;
