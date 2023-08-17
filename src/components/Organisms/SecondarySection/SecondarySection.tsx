import InformationLanding from "@/components/Molecules/InformationLanding/InformationLanding";
import Image from "next/image";
import React from "react";

type SecondarySectionProps = {
    order: string;
    miniHeader: string;
    title: string;
    content: string;
    to: string;
    pathImage: string;
    buttonInfo: string;
    sizeImage: number;
};

const SecondarySection = ({
    order,
    buttonInfo,
    content,
    miniHeader,
    pathImage,
    title,
    to,
    sizeImage,
}: SecondarySectionProps) => {
    return (
        <div
            className={`flex ${
                order === "left" ? "flex-row" : "flex-row-reverse"
            } items-center bg-brand-50 justify-center flex-wrap py-10`}
        >
            <InformationLanding
                buttonInfo={buttonInfo}
                content={content}
                miniHeader={miniHeader}
                title={title}
                to={to}
            />

            <Image
                className="max-w-xl rounded-xl border-brand-600 border-2"
                src={pathImage}
                height={sizeImage ? sizeImage : "50"}
                width={sizeImage ? sizeImage : "50"}
                alt={`${miniHeader}-image`}
            />
        </div>
    );
};

export default SecondarySection;
