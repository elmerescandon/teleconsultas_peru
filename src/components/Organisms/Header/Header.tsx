import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import LoginBar from "@/components/Molecules/LoginBar/LoginBar";
import NavigationBar from "@/components/Molecules/NavigationBar/NavigationBar";
import React from "react";
import BurgerHeader from "../BurgerHeader/BurgerHeader";

const Header = () => {
    return (
        <header>
            <BurgerHeader />
            <div className="max-lg:hidden flex flex-row justify-between items-center py-8 px-48 max-2xl:px-10">
                <LinkLogo />
                <div className="flex gap-28 max-xl:gap-8">
                    <NavigationBar />
                    <LoginBar />
                </div>
            </div>
        </header>
    );
};

export default Header;
