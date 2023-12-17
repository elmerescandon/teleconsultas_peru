"use client";
import React, { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import InputTextAreav2 from "../../Inputs/InputTextAreav2/InputTextAreav2";
import ButtonPrimary2 from "../../Buttons/ButtonPrimary2/ButtonPrimary2";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { useAppSelector } from "@/redux/hooks";
import { IState } from "@/redux/store";
import { getNotesData } from "@/firebase/Notes/getNotes";
import addNotesData from "@/firebase/Notes/addNotes";

type PopUpNotesProps = {
    onClose: () => void;
    appointment: IAppointment;
};

const PopUpNotes = ({ onClose, appointment }: PopUpNotesProps) => {
    const user: IUserState = useAppSelector((state: IState) => state.user);
    const { userInfo } = user;
    const [edit, setEdit] = useState(false);
    const [notes, setNotes] = useState("");

    useEffect(() => {
        const getNotes = async () => {
            try {
                const data = await getNotesData(appointment._id, userInfo.role);
                if (data) setNotes(data);
            } catch (error) {
                console.log(error);
            }
        };
        getNotes();
    }, [userInfo]);

    const updateNotes = async () => {
        try {
            await addNotesData(appointment._id, userInfo.role, notes);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div
                className="bg-white p-10 rounded-3xl flex flex-col gap-5 h-3/4 w-1/2 overflow-auto z-40
                max-2xl:px-10
                max-lg:w-10/12 "
            >
                <div className="flex items-center justify-between">
                    <h2
                        className="text-3xl font-semibold
                                    max-lg:text-2xl"
                    >
                        Mis Notas
                    </h2>
                    <button onClick={onClose}>
                        <XMarkIcon className="w-10 h-10 ml-auto" />
                    </button>
                </div>
                <div>
                    {edit ? (
                        <InputTextAreav2
                            onChange={setNotes}
                            initialValue={notes}
                            rows={10}
                        />
                    ) : (
                        <p className="text-lg w-full border-2 p-5">{notes}</p>
                    )}
                </div>
                <div className="flex gap-5">
                    <ButtonPrimary2
                        onClickFn={() => {
                            if (edit) {
                                updateNotes();
                                setEdit(false);
                            } else {
                                setEdit(true);
                            }
                        }}
                    >
                        {edit ? "Guardar" : "Editar"}
                    </ButtonPrimary2>
                </div>
            </div>
        </div>
    );
};

export default PopUpNotes;
