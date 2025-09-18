import { FC, MouseEventHandler } from "react";
type ISubmitButton = FC<{
  onSubmit: MouseEventHandler<HTMLButtonElement>;
  text?: string;
  className?: string;
  children?: JSX.Element | JSX.Element[];
}>;

export const SubmitButton: ISubmitButton = ({ onSubmit, text, className, children }) => {
  return (
    <button className={className} onClick={onSubmit}>
      {children ? children : text}
    </button>
  );
};
