import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const MathOperations = ({ onClickOperation, onClickEqual }) => (
  <section className="math-operations">
    <Button backgroundColor='#ffce5c' text="➕" clickHandler={onClickOperation} />
    <Button text="➖" backgroundColor='#ffce5c' clickHandler={onClickOperation} />
    <Button text="✖️" backgroundColor='#ffce5c' clickHandler={onClickOperation} />
    <Button text="➗" backgroundColor='#ffce5c' clickHandler={onClickOperation} />
    <Button text="🟰" backgroundColor='#ffce5c' clickHandler={onClickEqual} />
  </section>
);

MathOperations.propTypes = {
  onClickOperation: PropTypes.func.isRequired,
  onClickEqual: PropTypes.func.isRequired
};

export default MathOperations;
