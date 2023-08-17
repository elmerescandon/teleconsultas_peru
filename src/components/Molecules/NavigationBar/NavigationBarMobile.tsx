import LinkSecondary from "@/components/Atoms/Links/LinkSecondary/LinkSecondary";
import Routes from "@/utils/routes/Routes";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const NavigationBarMobile = () => {
    <div className="navigation-bar flex flex-row items-center gap-7">
        <LinkSecondary to={Routes.RESERVE}>
            {"¡Reserva tu cita!"}
            <ChevronDoubleRightIcon className="w-5 h-5" />
        </LinkSecondary>

        <LinkSecondary to={Routes.PATIENTS}>
            {"Pacientes"}
            <ChevronDoubleRightIcon className="w-5 h-5" />
        </LinkSecondary>

        <LinkSecondary to={Routes.DOCTORS}>
            {"Doctores"}
            <ChevronDoubleRightIcon className="w-5 h-5" />
        </LinkSecondary>
        <LinkSecondary to={Routes.ESPECIALITY}>
            {"Especialidades"}
            <ChevronDoubleRightIcon className="w-5 h-5" />
        </LinkSecondary>
    </div>;
};

export default NavigationBarMobile;
