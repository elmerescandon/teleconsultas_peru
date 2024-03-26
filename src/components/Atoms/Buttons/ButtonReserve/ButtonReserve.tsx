import React from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import LoadingHorizontal from "@/components/Molecules/Loaders/LoadingHorizontal/LoadingHorizontal";

type ButtonReserveProps = {
  onClickFn: () => void;
  loading?: boolean;
};

const ButtonReserve = ({onClickFn, loading = false}: ButtonReserveProps) => {
  return (
    <div className="max-xl:pt-10 flex justify-end w-full max-xl:justify-center">
      <div className="max-xl:w-1/2">
        <ButtonPrimary onClickFn={onClickFn}>Siguiente</ButtonPrimary>
        {loading && <LoadingHorizontal />}
      </div>
    </div>
  );
};

export default ButtonReserve;
