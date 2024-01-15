import DocumentItem from "@/components/Molecules/DocumentItem/DocumentItem";
import React from "react";

const ProfileDocs = () => {
    return (
        <div className="w-full pt-5">
            <div className="text-xl font-semibold">Documentos</div>
            <div className="flex flex-wrap items-center justify-center w-full mt-5 gap-14">
                <DocumentItem document="DNI" type="id" />
                <DocumentItem document="Colegiatura" type="colegiatura" />
                <DocumentItem document="Curriculum" type="curriculum" />
                <DocumentItem document="Título" type="titulo" />
            </div>
        </div>
    );
};

export default ProfileDocs;
