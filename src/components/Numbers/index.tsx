import React from "react";
import PropTypes from 'prop-types'
import Button from "../Button";

const renderButtons = onClickNumber => {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  return numbers.map(number => <Button key={number} text={number.toString()} clickHandler={onClickNumber} />)
};

const Numbers = ({ onClickNumber }) => (
  <div className="numbers">
    {renderButtons(onClickNumber)}
  </div>
);

Number.propTypes = {
  onClickNumber: PropTypes.func.isRequired
};

export default Numbers;
