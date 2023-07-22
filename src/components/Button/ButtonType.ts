type ButtonClickHandler = (text: string) => void;

type ButtonType = {
  type?: string;
  text: string;
  clickHandler: ButtonClickHandler;
  backgroundColor?: string;
};

export default ButtonType;
