import Routes from "@/utils/routes/Routes";
import Link from "next/link";
import React from "react";

const BurgerHeaderMain = () => {
    const linkRoutes = [
        {
            name: "¡Reserva tu cita!",
            route: Routes.RESERVE_DOCTORS,
        },
        {
            name: "Medicina General",
            route: Routes.DOCTORS_GENERAL,
        },
        {
            name: "Psicólogos",
            route: Routes.DOCTORS_PSYCHOLOGISTS,
        },
        {
            name: "Nutricionistas",
            route: Routes.DOCTORS_NUTRITIONISTS,
        },
        {
            name: "Iniciar Sesión",
            route: Routes.LOGIN,
        },
        {
            name: "Regístrate",
            route: Routes.REGISTER,
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

export default BurgerHeaderMain;
