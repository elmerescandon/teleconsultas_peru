import LinkSecondary from "@/components/Atoms/Links/LinkSecondary/LinkSecondary";
import Routes from "@/utils/routes/Routes";
import React from "react";

const NavigationBarDoctor = () => {
    return (
        <div className="navigation-bar flex flex-row items-center gap-7 max-xl:gap-4">
            <LinkSecondary to={Routes.DOCTOR_HOME}>{"Inicio"}</LinkSecondary>
            <LinkSecondary to={Routes.DOCTOR_APPOINTMENTS}>
                {"Citas"}
            </LinkSecondary>
        </div>
    );
};

export default NavigationBarDoctor;
