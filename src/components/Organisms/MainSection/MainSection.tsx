import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import Routes from "@/utils/routes/Routes";
import React from "react";

interface MainSectionProps {
    title: string;
    subtitle: string;
}

const MainSection = ({ title, subtitle }: MainSectionProps) => {
    return (
        <div className="flex flex-col items-center px-56 py-20 max-lg:justify-center max-lg:pb-5 max-lg:px-20 max-lg:pt-36 max-sm:px-5">
            <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-semibold max-lg:text-center">
                    {title}
                </h1>
                <h5 className="text-2xl font-semibold max-lg:text-center">
                    {subtitle}
                </h5>
                <div className="flex justify-center py-5 text-center gap-10">
                    <LinkPrimary to={Routes.LOGIN}>
                        <div className="w-36 flex items-center justify-center h-full">
                            Soy un profesional de la salud
                        </div>
                    </LinkPrimary>
                    <LinkPrimary to={Routes.RESERVE_DOCTORS}>
                        <div className="w-36 flex items-center  justify-center h-full">
                            Soy un paciente
                        </div>
                    </LinkPrimary>
                </div>
            </div>
        </div>
    );
};

export default MainSection;
