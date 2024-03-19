import ButtonClosePopUp from "@/components/Atoms/Buttons/ButtonClosePopUp/ButtonClosePopUp";
import React from "react";

type PopUpHeadlinepProps = {
  title: string;
  onClose: () => void;
};

const PopUpHeadline = ({title, onClose}: PopUpHeadlinepProps) => {
  return (
    <div className="flex justify-between items-center">
      <h2
        className="text-3xl font-semibold
                            max-lg:text-2xl"
      >
        {title}
      </h2>
      <ButtonClosePopUp onClose={onClose} />
    </div>
  );
};

export default PopUpHeadline;
