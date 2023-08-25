import React from "react";
import ButtonPrimary from "../../Buttons/ButtonPrimary/ButtonPrimary";

type PopUpReservationProps = {
    onClose: () => void;
};

const PopUpReservation = ({ onClose }: PopUpReservationProps) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-28 rounded-3xl">
                <div className="flex flex-col items-center gap-10">
                    <h2 className="text-4xl font-bold">¡Lo sentimos!</h2>
                    <p className="text-xl">
                        Debes completar todos los campos para poder agendar una
                        cita
                    </p>
                    <ButtonPrimary onClickFn={onClose}>Cerrar</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default PopUpReservation;
