import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import React from "react";

interface MainSectionProps {
    title: string;
    subtitle: string;
    linkRef: string;
    linkName: string;
}

const MainSection = ({
    title,
    subtitle,
    linkRef,
    linkName,
}: MainSectionProps) => {
    return (
        <div className="flex flex-col items-center px-56 py-32">
            <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-semibold">{title}</h1>
                <h5 className="text-2xl font-semibold">{subtitle}</h5>
                <div>
                    <LinkPrimary to={linkRef}>{linkName}</LinkPrimary>
                </div>
            </div>
        </div>
    );
};

export default MainSection;
