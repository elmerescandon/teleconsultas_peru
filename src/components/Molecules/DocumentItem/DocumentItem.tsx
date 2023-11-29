import DocumentDownload from "@/components/Atoms/DocumentDownload/DocumentDownload";
import DocumentUpload from "@/components/Atoms/DocumentUpload/DocumentUpload";
import { downloadDoctorData } from "@/firebase/Doctor/downloadDoctorData";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import React, { useEffect, useState } from "react";

type DocumentItemProps = {
    document: string;
    type: "id" | "cmp" | "curriculum" | "titulo" | "otros";
};

const DocumentItem = ({ document, type }: DocumentItemProps) => {
    const user: IUserState = useAppSelector((state) => state.user);
    const { userInfo } = user;
    const { _id } = userInfo;
    const [documentUrl, setDocumentUrl] = useState("");
    const [correct, setCorrect] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                if (_id === "") throw Error("Aún no carga el id");
                const url = await downloadDoctorData(type, `${_id}.pdf`);
                setDocumentUrl(url);
            } catch (error) {
                setDocumentUrl("");
            }
        };
        getData();
    }, [document, type, correct, _id]);

    return (
        <div>
            {documentUrl !== "" ? (
                <DocumentDownload url={documentUrl} document={document} />
            ) : (
                <DocumentUpload
                    type={type}
                    id={_id}
                    document={document}
                    correct={correct}
                    setCorrect={setCorrect}
                />
            )}
        </div>
    );
};

export default DocumentItem;
