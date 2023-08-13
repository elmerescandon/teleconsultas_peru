"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import InputSelect from "@/components/Atoms/Inputs/InputSelect/InputSelect";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import InputTextArea from "@/components/Atoms/Inputs/InputTextArea/InputTextArea";
import React from "react";

type InformationFormProps = {
    title: string;
};

const InformationForm = ({ title }: InformationFormProps) => {
    return (
        <div className="flex flex-col items-center py-10">
            <div className="text-3xl font-semibold pb-5">{title}</div>
            <form className="flex flex-col gap-2">
                <div className="flex flex-row gap-6">
                    <div className="flex flex-col gap-3">
                        <InputText placeholder="Nombre y Apellidos" />
                        <InputText placeholder="Correo Elecrónico" />
                        <InputSelect
                            placeholder="Escoge tu especialidad"
                            selectId="select"
                            options={[
                                {
                                    label: "Oftalmología",
                                    value: "oftalmologia",
                                },
                                {
                                    label: "Estomatologia",
                                    value: "oftalmologia",
                                },
                                {
                                    label: "Medicina General",
                                    value: "oftalmologia",
                                },
                                {
                                    label: "Endocrinología",
                                    value: "oftalmologia",
                                },
                                { label: "Cardiología", value: "oftalmologia" },
                            ]}
                        />
                    </div>
                    <InputTextArea rows={7} cols={50} />
                </div>

                <ButtonPrimary onClickFn={() => {}}>Enviar</ButtonPrimary>
            </form>
        </div>
    );
};

export default InformationForm;
