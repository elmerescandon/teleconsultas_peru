import LinkSecondary from "@/components/Atoms/Links/LinkSecondary/LinkSecondary";
import Routes from "@/utils/routes/Routes";
import React from "react";

const NavigationBarGeneral = () => {
    return (
        <div className="navigation-bar flex flex-row items-center gap-7 max-xl:gap-4 ">
            <LinkSecondary to={Routes.RESERVE}>
                {"¡Reserva tu cita!"}
            </LinkSecondary>
            <LinkSecondary to={Routes.PATIENTS}>{"Doctores"}</LinkSecondary>
            <LinkSecondary to={Routes.DOCTORS}>{"Psicólogos"}</LinkSecondary>
            <LinkSecondary to={Routes.ESPECIALITY}>
                {"Nutricionistas"}
            </LinkSecondary>
            <LinkSecondary to={Routes.ESPECIALITY}>
                {"Otras especialidades"}
            </LinkSecondary>
        </div>
    );
};

export default NavigationBarGeneral;
