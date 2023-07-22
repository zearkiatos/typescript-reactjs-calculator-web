import { FC } from "react";
import "./button.css";
import { ButtonType } from "./ButtonType";

const DEFAULT_BACKGROUNDCOLOR: string = "transparent";
const Button: FC<ButtonType> = ({
  type,
  text,
  clickHandler,
  backgroundColor,
}) => {
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

export default Button;
