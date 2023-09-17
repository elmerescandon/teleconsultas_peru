import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import { PlusIcon } from "@heroicons/react/24/outline";
import { PencilIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

type LabelPointsEditProps = {
    label: string;
    points: string[] | undefined;
};

const LabelPointsEdit = ({ label, points }: LabelPointsEditProps) => {
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
                <div className="flex flex-col justify-start items-center gap-5 py-10">
                    <div className="flex gap-5 justify-start w-full">
                        <p className="text-lg text-gray-500 items-center">
                            {label}
                        </p>
                        {!isEditing && (
                            <button
                                onClick={handleEditClick}
                                className="text-gray-700 rounded-full"
                            >
                                <PencilIcon className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                    <ul
                        className={`flex w-full pl-24 ${
                            isEditing ? "flex-col" : "flex-row"
                        }`}
                    >
                        {updatedPoints!.map((point, index) => (
                            <li
                                className="text-lg w-full list-disc"
                                key={index}
                            >
                                <div className="flex items-center gap-3">
                                    {point}
                                    {isEditing && (
                                        <button
                                            onClick={() =>
                                                handleRemovePoint(index)
                                            }
                                            className="text-gray-500"
                                        >
                                            <TrashIcon className="w-6 h-6" />
                                        </button>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                    {isEditing ? (
                        <div className="flex w-full pl-16 items-center">
                            <input
                                type="text"
                                placeholder="Agrega un nuevo punto"
                                value={newPoint}
                                onChange={handleInputChange}
                                className="border rounded-md p-2 mr-2"
                            />
                            <button
                                onClick={handleAddPoint}
                                className="text-gray-500 p-2"
                            >
                                <PlusIcon className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleCancelEdit}
                                className="text-gray-500 ml-2"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>
                        </div>
                    ) : (
                        <div className="w-full flex justify-end"></div>
                    )}
                </div>
            ) : (
                <div className="py-3">
                    <ButtonPrimary
                        onClickFn={() => {
                            setUpdatedPoints([]);
                        }}
                    >
                        {`Agrega ${label}`}
                    </ButtonPrimary>
                </div>
            )}
        </div>
    );
};

export default LabelPointsEdit;
