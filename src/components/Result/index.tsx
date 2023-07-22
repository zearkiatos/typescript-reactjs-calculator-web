import { FC } from "react";
import ResultType from "./ResultType";

const Result: FC<ResultType> = ({ value }) => (
  <div className="result">
    <span>{value}</span>
  </div>
);

export default Result;
