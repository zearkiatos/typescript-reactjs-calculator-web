import { FC } from 'react';
import Button from "../Button";
import FunctionType from "./FunctionType";

const Functions:FC<FunctionType> = ({ onContentClear, onDelete }) => (
  <div className="functions">
    <Button type="button-long-text" text="clear" clickHandler={onContentClear} />
    <Button text="⬅" clickHandler={onDelete} />
  </div>
);

export default Functions;
