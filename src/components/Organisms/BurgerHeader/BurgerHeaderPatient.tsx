import Routes from "@/utils/routes/Routes";
import Link from "next/link";
import React from "react";

const BurgerHeaderPatient = () => {
    const linkRoutes = [
        {
            name: "Inicio",
            route: Routes.PATIENT_HOME,
        },
        {
            name: "Revisa tu historial",
            route: Routes.PATIENT_HISTORY,
        },
        {
            name: "Reserva una cita",
            route: Routes.RESERVE,
        },
        {
            name: "Calendario",
            route: Routes.PATIENT_APPOINTMENTS,
        },
    ];
    return (
        <div className="flex flex-col items-start bg-basic-white animate-open-menu">
            {linkRoutes.map((linkRoute, index) => {
                const bgColor =
                    linkRoute.name === "Iniciar Sesión" ||
                    linkRoute.name === "Regístrate"
                        ? "bg-brand-700 text-basic-white"
                        : "bg-basic-white text-brand-700";

                return (
                    <Link
                        key={index}
                        href={linkRoute.route}
                        className={`text-base font-semibold pl-5 py-4 ${bgColor}  w-full`}
                    >
                        {linkRoute.name}
                    </Link>
                );
            })}
        </div>
    );
};

export default BurgerHeaderPatient;
