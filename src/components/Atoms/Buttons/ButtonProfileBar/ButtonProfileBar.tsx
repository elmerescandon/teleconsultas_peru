import React from "react";

type ButtonProfileBarProps = {
  onClick: () => void;
  text: string;
};

const ButtonProfileBar = ({onClick, text}: ButtonProfileBarProps) => {
  return (
    <button
      onClick={onClick}
      className="block w-full p-4 text-base font-semibold text-brand-900 bg-white text-left
           hover:bg-brand-100 "
    >
      {text}
    </button>
  );
};

export default ButtonProfileBar;
