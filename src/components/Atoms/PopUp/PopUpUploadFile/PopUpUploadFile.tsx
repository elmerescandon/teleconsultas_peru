import React, { useState } from "react";
import ButtonPrimary from "../../Buttons/ButtonPrimary/ButtonPrimary";
import InputFile from "../../Inputs/InputFile/InputFile";
import { uploadDoctorData } from "@/firebase/Doctor/uploadDoctorData";
import LoadingCircle from "@/components/Molecules/Loaders/LoadingCircle/LoadingCircle";

type PopUpUploadFileProps = {
    onClose: () => void;
    id: string;
    type: string;
    setCorrect: (state: boolean) => void;
    correct: boolean;
};

const PopUpUploadFile = ({
    onClose,
    id,
    type,
    setCorrect,
    correct,
}: PopUpUploadFileProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const cargarArchivo = async () => {
        try {
            setError("");
            setCorrect(false);
            setLoading(true);
            if (file === null) throw Error("Agrega un archivo primero");
            uploadDoctorData(file, `${id}.pdf`, type);
            setCorrect(true);
        } catch (error) {
            setLoading(false);
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-28 rounded-3xl flex flex-col gap-5 w-1/3 overflow-auto">
                <h2 className="font-semibold text-3xl">Sube un archivo</h2>
                <InputFile
                    onChange={(file: File) => {
                        setFile(file);
                    }}
                />
                {loading && <LoadingCircle />}
                {error && (
                    <p className="text-red-500 font-semibold py-5">{error}</p>
                )}
                {correct && (
                    <p className="font-semibold py-2 text-emerald-500 text-center">
                        Se agregó la información correctamente
                    </p>
                )}
                <div className="flex gap-5 pb-10">
                    <ButtonPrimary onClickFn={cargarArchivo}>
                        Subir archivo
                    </ButtonPrimary>
                    <ButtonPrimary onClickFn={onClose}>Cerrar</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default PopUpUploadFile;
