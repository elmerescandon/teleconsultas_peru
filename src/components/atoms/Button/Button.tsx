"use client";
import "./Button.scss";

type ButtonProps = {
  content: string;
  onChangeFunction: () => void;
};

const Button = ({ content, onChangeFunction }: ButtonProps) => {
  return (
    <button
      className="simple-button font-bold py-4 px-8 rounded-md md:ml-4"
      onChange={onChangeFunction}
    >
      {content}
    </button>
  );
};

export default Button;
