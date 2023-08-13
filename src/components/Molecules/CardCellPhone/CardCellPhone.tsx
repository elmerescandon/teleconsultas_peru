import Image from "next/image";
import React from "react";

type CardCellPhoneProps = {
    stepNumber: number;
    title: string;
    info: string;
};

const CardCellPhone = ({ stepNumber, title, info }: CardCellPhoneProps) => {
    return (
        <div className="bg-brand-50 flex flex-col items-center">
            <div className="flex gap-4 items-center w-30">
                <div className="flex justify-center items-center text-3xl font-basic-black bg-brand-100 p-4 rounded-full w-14 h-14 font-semibold">
                    {stepNumber}
                </div>
                <div className="text-3xl font-semibold">{title}</div>
            </div>
            <Image
                src="/iphone_step.png"
                height="400"
                alt="cellphone-step"
                width="350"
            />
            <div className="font-medium text-xl text-center w-48">{info}</div>
        </div>
    );
};

export default CardCellPhone;
