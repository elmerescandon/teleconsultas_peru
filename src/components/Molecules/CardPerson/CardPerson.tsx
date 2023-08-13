import Image from "next/image";
import React from "react";

type CardPersonProps = {
    name: string;
    label: string;
    imagePath: string;
};

const CardPerson = ({ name, label, imagePath }: CardPersonProps) => {
    return (
        <div className="flex flex-col shadow-md p-8 rounded-2xl">
            <Image
                alt={`${label}-alt`}
                height="200"
                width="250"
                src={imagePath}
                className="rounded-2xl"
            />
            <div className="pt-4">
                <div className="text-2xl font-semibold">{name}</div>
                <div className="text-base font-light">{label}</div>
            </div>
        </div>
    );
};

export default CardPerson;
