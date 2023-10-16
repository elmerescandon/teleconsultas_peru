import LinkSecondary from "@/components/Atoms/Links/LinkSecondary/LinkSecondary";
import Routes from "@/utils/routes/Routes";
import React from "react";

const NavigationBarPatient = () => {
    return (
        <div className="navigation-bar flex flex-row items-center gap-7 max-xl:gap-4">
            <LinkSecondary to={Routes.PATIENT_HOME}>{"Inicio"}</LinkSecondary>
            <LinkSecondary to={Routes.PATIENT_HISTORY}>
                {"Historias"}
            </LinkSecondary>
            <LinkSecondary to={Routes.RESERVE}>{"Reserva"}</LinkSecondary>
            <LinkSecondary to={Routes.PATIENT_APPOINTMENTS}>
                {"Calendario"}
            </LinkSecondary>
        </div>
    );
};

export default NavigationBarPatient;
