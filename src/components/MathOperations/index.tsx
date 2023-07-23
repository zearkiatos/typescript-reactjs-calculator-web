import { FC } from "react";
import Button from "../Button";
import MathOperationsType from "./MathOperationsType";

const MathOperations: FC<MathOperationsType> = ({
  onClickOperation,
  onClickEqual,
}) => (
  <section className="math-operations">
    <Button
      backgroundColor="#ffce5c"
      text="➕"
      clickHandler={onClickOperation}
    />
    <Button
      text="➖"
      backgroundColor="#ffce5c"
      clickHandler={onClickOperation}
    />
    <Button
      text="✖️"
      backgroundColor="#ffce5c"
      clickHandler={onClickOperation}
    />
    <Button
      text="➗"
      backgroundColor="#ffce5c"
      clickHandler={onClickOperation}
    />
    <Button text="🟰" backgroundColor="#ffce5c" clickHandler={onClickEqual} />
  </section>
);

export default MathOperations;
