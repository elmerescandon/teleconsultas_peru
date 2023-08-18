import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import React from "react";

type InformationLandingProps = {
    miniHeader: string;
    title: string;
    content: string;
    to: string;
    buttonInfo: string;
};

const InformationLanding = ({
    miniHeader,
    title,
    content,
    to,
    buttonInfo,
}: InformationLandingProps) => {
    return (
        <div className="flex flex-col gap-10 px-20 py-24 max-xl:items-center max-xl:py-10">
            <div className="flex flex-col gap-5">
                <div className="text-lg font-semibold">{miniHeader}</div>
                <div className="text-5xl max-w-lg font-semibold">{title}</div>
                <div className="text-xl max-w-md text-neutral-600 max-xl:text-center">
                    {content}
                </div>
            </div>

            <div>
                <LinkPrimary to={to} type="other">
                    {buttonInfo}
                </LinkPrimary>
            </div>
        </div>
    );
};

export default InformationLanding;
