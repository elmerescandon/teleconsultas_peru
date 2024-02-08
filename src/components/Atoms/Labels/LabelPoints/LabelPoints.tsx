import React from "react";

type LabelPointsProps = {
    label: string;
    points: string[];
};

const LabelPoints = ({ label, points }: LabelPointsProps) => {
    return (
        <div className="flex flex-col justify-start items-center gap-5 py-5">
            <p className="text-lg text-gray-500 w-full">{label}</p>
            <ul
                className="flex w-full first-letter:pl-4 gap-2 justify-start
                            max-xl:pl-5"
            >
                {points.map((point, index) => {
                    return (
                        <li className="text-lg list-none rounded-lg py-2 px-4 bg-brand-200" key={index}>
                            {point}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default LabelPoints;
