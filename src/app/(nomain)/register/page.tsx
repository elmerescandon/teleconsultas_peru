import RegisterSelection from "@/components/Templates/RegisterSelection/RegisterSelection";
import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div className="flex w-full">
            <RegisterSelection />
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

export default page;
