/* eslint no-eval: 0 */
import { useState, FC } from "react";
import words from 'lodash.words';
import Result from "./Result";
import Numbers from "./Numbers";
import MathOperations from "./MathOperations";
import Functions from "./Functions";
import '../styles/app.css';

const App: FC = () => {
  const [stack, setStack] = useState("");
  const items = words(stack, /[^-^+^*^/]+/g);
  const onClickNumber = (number: string | number) => setStack(`${stack}${number}`);

  const onContentClear = () => setStack("");

  const onDelete = () => {
    if (stack.length > 0) {
      const newStack = stack.substring(0, stack.length - 1);
      setStack(newStack);
    }
  };

  const operationResolver: any = {
    "➕": "+",
    "➖": "-",
    "✖️": "*",
    "➗": "/"
  };

  const value = items.length > 0 ? items[items.length-1] : "0";

  const onClickOperation = (operation: string | number) => setStack(`${stack}${operationResolver[operation]}`);

  const onClickEqual = () => setStack(eval(stack).toString());
  return (
    <main className="react-calculator">
      <Result value={value} />
      <Numbers onClickNumber={onClickNumber} />
      <Functions onDelete={onDelete} onContentClear={onContentClear} />
      <MathOperations
        onClickOperation={onClickOperation}
        onClickEqual={onClickEqual}
      />
    </main>
  );
};
export default App;