import React from "react";

type TextRecommendationsProps = {
    text: string;
};

const TextRecommendations = ({ text }: TextRecommendationsProps) => {
    return <div className="px-5 p-1 text-lg font-normal">{text}</div>;
};

export default TextRecommendations;
