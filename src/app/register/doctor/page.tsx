import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import Footer from "@/components/Organisms/Footer/Footer";
import RegisterForm from "@/components/Templates/RegisterForm/RegisterForm";
import React from "react";

const Register = () => {
    return (
        <div>
            <div className="flex flex-row justify-between items-center py-12 px-48 max-xl:justify-center max-xl:px-0">
                <LinkLogo />
            </div>
            <RegisterForm role="doctor" />
            <Footer />
        </div>
    );
};

export default Register;
