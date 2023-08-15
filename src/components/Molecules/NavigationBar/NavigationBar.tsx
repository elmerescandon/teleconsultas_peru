import LinkSecondary from "@/components/Atoms/Links/LinkSecondary/LinkSecondary";
import Routes from "@/utils/routes/Routes";
import React from "react";

const NavigationBar = () => {
    return (
        <div className="navigation-bar flex flex-row items-center gap-7">
            <LinkSecondary to={Routes.RESERVE}>
                {"¡Reserva tu cita!"}
            </LinkSecondary>
            <LinkSecondary to={Routes.PATIENTS}>{"Pacientes"}</LinkSecondary>
            <LinkSecondary to={Routes.DOCTORS}>{"Doctores"}</LinkSecondary>
            <LinkSecondary to={Routes.ESPECIALITY}>
                {"Especialidades"}
            </LinkSecondary>
        </div>
    );
};

export default NavigationBar;
