import React from "react";

type ButtonThirdProps = {
  children: React.ReactNode;
  onClickFn: () => void | Promise<void> | (() => void);
};

const ButtonThird = ({children, onClickFn}: ButtonThirdProps) => {
  return (
    <button
      className="text-brand-600 bg-classic-white rounded-lg p-2 text-base font-medimum border-2 border-brand-600 hover:bg-brand-600 hover:text-basic-white transition duration-300 ease-in-out"
      onClick={onClickFn}
    >
      {children}
    </button>
  );
};

export default ButtonThird;
