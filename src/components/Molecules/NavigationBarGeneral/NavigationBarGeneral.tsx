import LinkSecondary from "@/components/Atoms/Links/LinkSecondary/LinkSecondary";
import Routes from "@/utils/routes/Routes";
import React from "react";

const NavigationBarGeneral = () => {
    return (
        <div className="navigation-bar flex flex-row items-center gap-7 max-xl:gap-4 ">
            <LinkSecondary to={Routes.PATIENTS}>{"Pacientes"}</LinkSecondary>
            <LinkSecondary to={Routes.RESERVE_DOCTORS}>
                {"¡Reserva tu cita!"}
            </LinkSecondary>
            <LinkSecondary to={Routes.DOCTORS_GENERAL}>
                {"Medicina General"}
            </LinkSecondary>
            <LinkSecondary to={Routes.DOCTORS_PSYCHOLOGISTS}>
                {"Psicólogos"}
            </LinkSecondary>
            <LinkSecondary to={Routes.DOCTORS_NUTRITIONISTS}>
                {"Nutricionistas"}
            </LinkSecondary>
            {/* <LinkSecondary to={Routes.ESPECIALITY}>
                {"Otras especialidades"}
            </LinkSecondary> */}
        </div>
    );
};

export default NavigationBarGeneral;
