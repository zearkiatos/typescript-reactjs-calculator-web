import { ReactElement } from 'react';
type ButtonClickHandler = (data: string | number) => void | ReactElement<any,any>;

type ButtonType = {
  key?: string | number;
  type?: string;
  text: string;
  clickHandler: ButtonClickHandler;
  backgroundColor?: string;
};

export type { ButtonType, ButtonClickHandler };
