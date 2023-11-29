import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import InputFile from "@/components/Atoms/Inputs/InputFile/InputFile";
import { downloadData } from "@/firebase/generals/downloadData";
import { uploadData } from "@/firebase/generals/uploadData";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { PaperClipIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import LoadingCircle from "../Loaders/LoadingCircle/LoadingCircle";

type NutritionNotesProps = {
    appointment: IAppointment;
};

const NutritionNotes = ({ appointment }: NutritionNotesProps) => {
    const user: IUserState = useAppSelector((state) => state.user);
    const [file, setFile] = useState<File | null>(null);
    const { userInfo } = user;
    const { _id } = userInfo;
    const [documentUrl, setDocumentUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [correct, setCorrect] = useState(false);

    const uploadNotes = async () => {
        try {
            setCorrect(false);
            setLoading(true);
            setError("");
            if (file === null) throw Error("Agrega un archivo primero");
            uploadData(
                "doctors",
                "nutrition",
                `${appointment.patientId}_nutrition.pdf`,
                file
            );
            setCorrect(true);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const getData = async () => {
            try {
                if (_id === "") throw Error("Aún no carga el id");
                const url = await downloadData(
                    "doctors",
                    "nutrition",
                    `${appointment.patientId}_nutrition.pdf`
                );
                setDocumentUrl(url);
            } catch (error) {
                setDocumentUrl("");
            }
        };
        getData();
    }, [correct]);

    return (
        <div className="py-5">
            <h1 className="text-xl">Notas de nutrición</h1>
            <div className="flex">
                {documentUrl !== "" ? (
                    <a
                        className="flex flex-col items-center justify-center w-36 h-36 p-5"
                        href={documentUrl}
                        target="_blank"
                    >
                        <PaperClipIcon className="w-10 h-10 text-brand-600" />
                        <div className="mt-2 text-sm font-medium text-center">{`Ver dieta`}</div>
                    </a>
                ) : (
                    <div className="flex gap-5">
                        <InputFile
                            onChange={(file: File) => {
                                setFile(file);
                            }}
                        />
                        <ButtonPrimary onClickFn={uploadNotes}>
                            Subir
                        </ButtonPrimary>
                        {loading && <LoadingCircle />}
                        {error && (
                            <div className="text-red-500 w-full">{error}</div>
                        )}
                        {correct && (
                            <div className="text-green-500 w-full">
                                ¡Subido correctamente!
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NutritionNotes;
