"use client";
import BurgerButton from "@/components/Atoms/Buttons/ButtonBurger/BurgerButton";
import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import LinkSecondary from "@/components/Atoms/Links/LinkSecondary/LinkSecondary";
import Routes from "@/utils/routes/Routes";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";

const BurgerHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
        <div className="lg:hidden fixed inset-0 z-50 h-20 ">
            <div className="flex flex-row justify-between items-center z-50 px-5 py-5 bg-basic-white">
                <BurgerButton toggleMenu={toggleMenu} isOpen={isOpen} />
                <LinkLogo />
            </div>

            {isOpen && (
                <div className="flex flex-col items-start bg-basic-white">
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
                                className={`text-base font-semibold pl-5 py-4 ${bgColor}  w-full  `}
                            >
                                {linkRoute.name}
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default BurgerHeader;
