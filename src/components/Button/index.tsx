import React from "react";
import PropTypes from "prop-types";
import "./button.css";
const DEFAULT_BACKGROUNDCOLOR = "transparent";
const Button = ({ type, text, clickHandler, backgroundColor }) => {
  const style = {
    backgroundColor: backgroundColor
      ? backgroundColor
      : DEFAULT_BACKGROUNDCOLOR,
  };
  return (
    <button style={style} className={type} onClick={() => clickHandler(text)}>
      <span>{text}</span>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
