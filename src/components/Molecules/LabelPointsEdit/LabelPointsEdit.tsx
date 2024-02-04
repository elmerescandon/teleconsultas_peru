import ButtonPrimary2 from "@/components/Atoms/Buttons/ButtonPrimary2/ButtonPrimary2";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
    CheckIcon,
    PencilIcon,
    PencilSquareIcon,
    TrashIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

type LabelPointsEditProps = {
    label: string;
    points: string[] | undefined;
    changePoints: (points: string[]) => void;
};

const LabelPointsEdit = ({
    label,
    points,
    changePoints,
}: LabelPointsEditProps) => {
    const [newPoint, setNewPoint] = useState<string>("");
    const [updatedPoints, setUpdatedPoints] = useState<string[] | undefined>(
        points
    );
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleAddPoint = () => {
        if (newPoint.trim() !== "" && updatedPoints) {
            setUpdatedPoints([...updatedPoints, newPoint]);
            setNewPoint("");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPoint(e.target.value);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setNewPoint("");
    };

    const handleRemovePoint = (index: number) => {
        if (!updatedPoints) return;
        const updatedPointsCopy = [...updatedPoints];
        updatedPointsCopy.splice(index, 1);
        setUpdatedPoints(updatedPointsCopy);
    };

    return (
        <div>
            {updatedPoints ? (
                <div className="flex flex-col justify-start gap-2 pb-4">
                    <div className="flex gap-2 justify-start items-center w-full">
                        <p className="text-lg text-gray-500 items-center">{label}</p>
                        {!isEditing && (
                            <button onClick={handleEditClick}>
                                <PencilSquareIcon className="w-5 h-5 text-gray-700" />
                            </button>
                        )}
                    </div>
                    <ul
                        className={`flex flex-wrap first-letter:pl-4 list-none gap-2 justify-start ${isEditing
                            ? "flex-col"
                            : "flex-row"
                            }`}
                    >
                        {updatedPoints!.map((point, index) => (
                            <li className="text-lg list-none rounded-lg py-2 px-4 bg-brand-200" key={index}>
                                <div className="flex items-center justify-between gap-3">
                                    {point}
                                    {isEditing && (
                                        <button
                                            onClick={() => handleRemovePoint(index)}
                                            className="text-basic-black"
                                        >
                                            <TrashIcon className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                    {isEditing ? (
                        <div
                            className="flex w-full items-center
                                       max-xl:flex-col max-xl:items-start"
                        >
                            <input
                                type="text"
                                placeholder="Agrega un nuevo punto"
                                value={newPoint}
                                onChange={handleInputChange}
                                className="border rounded-md p-2 mr-2"
                            />
                            <div className="flex items-center gap-2">
                                <button onClick={handleAddPoint} className="text-gray-500 p-2">
                                    <PlusIcon className="w-6 h-6" />
                                </button>

                                <button
                                    onClick={handleCancelEdit}
                                    className="text-gray-500"
                                >
                                    <XMarkIcon className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={() => {
                                        setIsEditing(false);
                                        if (updatedPoints) changePoints(updatedPoints);
                                    }}
                                    className="text-basic-white rounded-xl bg-slate-500 px-2 py-1 active:bg-slate-600 hover:bg-slate-400"
                                >
                                    Terminar
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full flex justify-end"></div>
                    )}
                </div>
            ) : (
                <ButtonPrimary2
                    onClickFn={() => {
                        setUpdatedPoints([]);
                    }}
                >
                    {`Agrega ${label}`}
                </ButtonPrimary2>
            )}
        </div>
    );
};

export default LabelPointsEdit;
