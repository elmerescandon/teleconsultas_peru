import React from "react";
import PopUpReservation from "../PopUpReservation/PopUpReservation";

type PopUpReservationOptionsProps = {
  popUps: number;
  setPopUps: (value: number) => void;
};

const PopUpReservationOptions = ({
  popUps,
  setPopUps,
}: PopUpReservationOptionsProps) => {
  return (
    <div>
      {popUps === 2 && (
        <PopUpReservation
          title="¡Lo sentimos!"
          message="Debes completar todos los campos para poder agendar una cita"
          onClose={() => setPopUps(2)}
        />
      )}
      {popUps === 1 && (
        <PopUpReservation
          title="¡Ya falta poco!"
          message="Inicia sesión o regístrate para agendar una cita"
          onClose={() => setPopUps(1)}
        />
      )}
    </div>
  );
};

export default PopUpReservationOptions;
