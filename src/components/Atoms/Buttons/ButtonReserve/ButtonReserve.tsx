import React from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

type ButtonReserveProps = {
  onClickFn: () => void;
};

const ButtonReserve = ({onClickFn}: ButtonReserveProps) => {
  return (
    <div className="max-xl:pt-10 flex justify-end w-full max-xl:justify-center">
      <div className="max-xl:w-1/2">
        <ButtonPrimary onClickFn={onClickFn}>Siguiente</ButtonPrimary>
      </div>
    </div>
  );
};

export default ButtonReserve;
