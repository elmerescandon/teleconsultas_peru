"use client";
import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import LinkSecondary from "@/components/Atoms/Links/LinkSecondary/LinkSecondary";
import Routes from "@/utils/routes/Routes";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const BurgerHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="lg:hidden fixed inset-0 z-50 h-24 bg-basic-white">
            <button
                className={`fixed top-5 left-3 p-2 focus:outline-none z-50`}
                onClick={toggleMenu}
            >
                {isOpen ? (
                    <XMarkIcon className="w-10 h-10 transition-opacity" />
                ) : (
                    <Bars3Icon className="w-10 h-10 transition-opacity" />
                )}
            </button>

            <div className="fixed -ml-10 left-1/2 z-50 top-9">
                <LinkLogo />
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-white z-40">
                    <div className="flex flex-col items-start pt-20">
                        <ul className="w-full">
                            <li className="pl-4  py-4">
                                <LinkSecondary to={Routes.PATIENTS}>
                                    Pacientes
                                </LinkSecondary>
                            </li>
                            <li className="pl-4  py-4">
                                <LinkSecondary to={Routes.DOCTORS}>
                                    Doctores
                                </LinkSecondary>
                            </li>
                            <li className="pl-4 py-4">
                                <LinkSecondary to={Routes.ESPECIALITY}>
                                    Especialidades
                                </LinkSecondary>
                            </li>
                            <li className="pl-4 py-6 bg-brand-600 -ml-4">
                                <LinkPrimary to={Routes.LOGIN}>
                                    Iniciar sesión
                                </LinkPrimary>
                            </li>
                            <li className="pl-4 py-6 bg-brand-600 -ml-4">
                                <LinkPrimary to={Routes.REGISTER}>
                                    Registrarse
                                </LinkPrimary>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BurgerHeader;
