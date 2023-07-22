import { FC } from "react";
import Button from "../Button";
import { ButtonClickHandler } from "../Button/ButtonType";
import NumberType from "./NumberType";

const renderButtons: FC<ButtonClickHandler> = (onClickNumber) => {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  return numbers.map((number) => (
    <Button
      key={number}
      text={number.toString()}
      clickHandler={onClickNumber}
    />
  ));
};

const Numbers: FC<NumberType> = ({ onClickNumber }) => (
  <div className="numbers">{renderButtons(onClickNumber)}</div>
);

export default Numbers;
