import React from "react";

type LabelPointsProps = {
    label: string;
    points: string[];
};

const LabelPoints = ({ label, points }: LabelPointsProps) => {
    return (
        <div className="flex flex-col justify-start items-center gap-5 h-12 py-16">
            <p className="text-lg text-gray-500 w-full">{label}</p>
            <ul className="flex w-full pl-24">
                {points.map((point, index) => {
                    return (
                        <li className="text-lg  w-full list-disc" key={index}>
                            {point}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default LabelPoints;