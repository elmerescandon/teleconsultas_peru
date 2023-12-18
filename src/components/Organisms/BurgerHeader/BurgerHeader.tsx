"use client";
import BurgerButton from "@/components/Atoms/Buttons/ButtonBurger/BurgerButton";
import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { IState } from "@/redux/store";
import React, { useState } from "react";
import BurgerHeaderMain from "./BurgerHeaderMain";
import BurgerHeaderPatient from "./BurgerHeaderPatient";
import BurgerHeaderDoctor from "./BurgerHeaderDoctor";

const BurgerHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const state: IUserState = useAppSelector(
        (state: IState) => state.user as IUserState
    );
    const { logged, userInfo } = state;
    const { role } = userInfo;

    return (
        <div className="lg:hidden fixed inset-0 z-50 h-20 ">
            <div className="flex flex-row justify-between items-center px-5 py-5 bg-basic-white relative z-20">
                <BurgerButton toggleMenu={toggleMenu} isOpen={isOpen} />
                <LinkLogo />
            </div>

            {isOpen && !logged && <BurgerHeaderMain />}
            {isOpen && logged && role === "patient" && (
                <BurgerHeaderPatient toggleMenu={toggleMenu} />
            )}
            {isOpen && logged && role === "doctor" && (
                <BurgerHeaderDoctor toggleMenu={toggleMenu} />
            )}
        </div>
    );
};

export default BurgerHeader;
