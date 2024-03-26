import React from "react";
import ButtonPrimary from "../../Buttons/ButtonPrimary/ButtonPrimary";
import LinkPrimary from "../../Links/LinkPrimary/LinkPrimary";

type PopUpReservationProps = {
  title: string;
  message: string;
  onClose: () => void;
  linkMessage?: string;
  linkTo?: string;
};

const PopUpReservation = ({
  title,
  message,
  onClose,
  linkMessage,
  linkTo,
}: PopUpReservationProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-28 rounded-3xl">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-xl">{message} </p>
          <ButtonPrimary onClickFn={onClose}>Cerrar</ButtonPrimary>
          {linkTo && <LinkPrimary to={linkTo}>{linkMessage}</LinkPrimary>}
        </div>
      </div>
    </div>
  );
};

export default PopUpReservation;
