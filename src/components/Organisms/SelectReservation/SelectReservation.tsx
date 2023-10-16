import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import React from "react";

type SelectReservationProps = {
    type: number;
    setType: (type: number) => void;
};

const SelectReservation = ({ type, setType }: SelectReservationProps) => {
    return (
        <div className="flex px-64 gap-52">
            <ButtonPrimary
                onClickFn={() => {
                    setType(0);
                }}
                selected={type === 0}
            >
                Reserva según doctor
            </ButtonPrimary>
            <ButtonPrimary
                onClickFn={() => {
                    setType(1);
                }}
                selected={type === 1}
            >
                Reserva según disponibilidad horaria
            </ButtonPrimary>
        </div>
    );
};

export default SelectReservation;
