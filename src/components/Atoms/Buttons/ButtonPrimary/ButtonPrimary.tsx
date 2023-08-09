import React from "react";

type ButtonPrimaryProps = {
  children: React.ReactNode;
  onClickFn: () => void;
};

const ButtonPrimary = ({ children, onClickFn }: ButtonPrimaryProps) => {
  return (
    <button
      className="text-basic-white bg-brand-600 rounded-lg p-2 text-sm font-normal"
      onChange={onClickFn}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
