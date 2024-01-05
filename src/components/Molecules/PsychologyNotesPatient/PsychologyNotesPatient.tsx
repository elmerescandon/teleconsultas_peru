import { downloadData } from "@/firebase/generals/downloadData";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { PaperClipIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

type PsychologyNotesPatientProps = {
    appointment: IAppointment;
};

const PsychologyNotesPatient = ({
    appointment,
}: PsychologyNotesPatientProps) => {
    const { _id, patientId } = appointment;
    const [documentUrl, setDocumentUrl] = useState("");
    useEffect(() => {
        const getData = async () => {
            try {
                if (_id === "") throw Error("Aún no carga el id");
                const url = await downloadData(
                    "doctors",
                    "psychology",
                    `${patientId}_psychology.pdf`
                );
                setDocumentUrl(url);
            } catch (error) {
                setDocumentUrl("");
            }
        };
        getData();
    }, []);
    return (
        <div>
            <h1 className="font-semibold text-xl py-5">Notas de psicología</h1>
            {documentUrl !== "" ? (
                <div className="flex gap-5">
                    <a
                        href={documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center"
                    >
                        <PaperClipIcon className="w-5 h-5" />
                        <p>Ver notas de psicología</p>
                    </a>
                </div>
            ) : (
                <div className="flex gap-5">
                    <p>No hay notas todavía</p>
                </div>
            )}
        </div>
    );
};

export default PsychologyNotesPatient;
