import React from "react";

type ButtonSecondaryProps = {
  children: React.ReactNode;
  onClickFn: () => void;
};

const ButtonSecondary = ({ children, onClickFn }: ButtonSecondaryProps) => {
  return (
    <button
      className="text-brand-600 bg-classic-white rounded-lg p-2 text-base font-medimum"
      onClick={onClickFn}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
