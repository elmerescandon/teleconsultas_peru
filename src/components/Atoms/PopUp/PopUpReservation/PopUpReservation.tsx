import React from "react";
import ButtonPrimary from "../../Buttons/ButtonPrimary/ButtonPrimary";
import LinkPrimary from "../../Links/LinkPrimary/LinkPrimary";
import Routes from "@/utils/routes/Routes";

type PopUpReservationProps = {
    title: string;
    message: string;
    onClose: () => void;
    requireSession?: boolean;
};

const PopUpReservation = ({
    onClose,
    title,
    message,
    requireSession = false,
}: PopUpReservationProps) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-28 rounded-3xl">
                <div className="flex flex-col items-center gap-10">
                    <h2 className="text-4xl font-bold">{title}</h2>
                    <p className="text-xl">{message} </p>
                    {requireSession && (
                        <div className="w-full flex justify-around h-14">
                            <LinkPrimary to={Routes.LOGIN}>
                                Iniciar sesión
                            </LinkPrimary>
                            <LinkPrimary to={Routes.REGISTER}>
                                Registrarse
                            </LinkPrimary>
                        </div>
                    )}
                    <ButtonPrimary onClickFn={onClose}>Cerrar</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default PopUpReservation;
