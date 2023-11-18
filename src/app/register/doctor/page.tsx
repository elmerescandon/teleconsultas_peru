import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import Footer from "@/components/Organisms/Footer/Footer";
import RegisterFormDoctor from "@/components/Templates/RegisterFormDoctor/RegisterFormDoctor";
import React from "react";

const Register = () => {
    return (
        <div className="h-screen">
            <div className="flex flex-row justify-between items-center py-12 px-48 max-xl:justify-center max-xl:px-0">
                <LinkLogo />
            </div>
            <RegisterFormDoctor />
            <Footer />
        </div>
    );
};

export default Register;
