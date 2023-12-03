import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

type BurgerButtonProps = {
    toggleMenu: () => void;
    isOpen: boolean;
};

const BurgerButton = ({ toggleMenu, isOpen }: BurgerButtonProps) => {
    return (
        <button onClick={toggleMenu}>
            {isOpen ? (
                <XMarkIcon className="w-10 h-10" />
            ) : (
                <Bars3Icon className="w-10 h-10" />
            )}
        </button>
    );
};

export default BurgerButton;
