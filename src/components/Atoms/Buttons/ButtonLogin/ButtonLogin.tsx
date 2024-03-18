import React from "react";

type ButtonLoginProps = {
  onClick: () => void;
  text: string;
};

const ButtonLogin = ({onClick, text}: ButtonLoginProps) => {
  return (
    <div
      onClick={onClick}
      className="py-2 px-4 text-base font-medium
        hover:bg-brand-500 hover:text-clasic-white cursor-pointer
        active:bg-brand-700 active:text-clasic-white
    "
    >
      {text}
    </div>
  );
};

export default ButtonLogin;
