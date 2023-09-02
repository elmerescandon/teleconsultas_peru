import LabelProfileMain from "@/components/Atoms/Labels/LabelProfileMain/LabelProfileMain";
import React from "react";

const ProfileDetailed = () => {
    return (
        <div className="h-2/3 pt-16 flex flex-col gap-7">
            <div className="text-xl font-semibold">Información Adicional</div>

            <div className="flex flex-row max-xl:flex-col gap-5">
                <div className="w-1/2 flex flex-col justify-around gap-10">
                    <LabelProfileMain
                        label="Región"
                        value="Lima"
                        editable={false}
                    />
                    <LabelProfileMain
                        label="Provincia"
                        value="Lima"
                        editable={false}
                    />
                    <LabelProfileMain
                        label="Distrito"
                        value="Miraflores"
                        editable={false}
                    />
                    <LabelProfileMain
                        label="Dirección"
                        value="Av. Larco 156"
                        editable={false}
                    />
                </div>
                <div className="w-1/2 flex flex-col justify-around gap-10">
                    <LabelProfileMain
                        label="Teléfono"
                        value="+51 942 235 231"
                        editable={false}
                    />
                    <LabelProfileMain
                        label="Edad"
                        value="51"
                        editable={false}
                    />
                    <LabelProfileMain
                        label="Nacimiento"
                        value="15/08/1973"
                        editable={false}
                    />
                    <LabelProfileMain
                        label="Sexo"
                        value="Hombre"
                        editable={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileDetailed;
