import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import LoginBar from "@/components/Molecules/LoginBar/LoginBar";
import NavigationBar from "@/components/Molecules/NavigationBar/NavigationBar";
import React from "react";

const Header = () => {
    return (
        <div className="flex flex-row justify-between items-center py-12">
            <LinkLogo />
            <div className="header-bar flex gap-28">
                <NavigationBar />
                <LoginBar />
            </div>
        </div>
    );
};

export default Header;
