import LoginSection from "@/components/Templates/LoginSection/LoginSection";
import Image from "next/image";
import React, { useEffect } from "react";

const Reserve = () => {
    useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_API_URL);
        console.log(process.env.GOOGLE_CLIENT_ID);
    }, []);
    return (
        <div className="flex w-full">
            <LoginSection role="patient" label="Pacientes" />
            <Image
                src="/telecom_landing.jpg"
                alt="landing-telemedicine"
                width={1000}
                height={1000}
                className="w-1/2 max-h-screen max-xl:hidden object-cover"
            />
        </div>
    );
};

export default Reserve;
