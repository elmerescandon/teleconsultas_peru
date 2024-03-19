import {XMarkIcon} from "@heroicons/react/24/outline";
import React from "react";

type ButtonClosePopUpProps = {
  onClose: () => void;
};

const ButtonClosePopUp = ({onClose}: ButtonClosePopUpProps) => {
  return (
    <button onClick={onClose}>
      <XMarkIcon className="w-10 h-10 ml-auto" />
    </button>
  );
};

export default ButtonClosePopUp;
