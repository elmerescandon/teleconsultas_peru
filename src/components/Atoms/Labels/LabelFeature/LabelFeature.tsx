import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

type LabelFeatureProps = {
    content: string;
};

const LabelFeature = ({ content }: LabelFeatureProps) => {
    return (
        <div className="flex flex-row items-center gap-3">
            <ArrowRightIcon className="w-8 h-8" />
            <div className="text-lg">{content}</div>
        </div>
    );
};

export default LabelFeature;
