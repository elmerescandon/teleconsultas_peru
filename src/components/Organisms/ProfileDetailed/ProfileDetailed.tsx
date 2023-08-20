import React from "react";

const ProfileDetailed = () => {
    return (
        <div className="h-2/3 pt-16 flex flex-col gap-7">
            <div className="text-xl font-semibold">Información Adicional</div>

            <div className="flex flex-row max-xl:flex-col gap-5">
                <div className="w-1/2 flex flex-col justify-around gap-10">
                    <div className="flex justify-start max-xl:flex-col">
                        <p className="text-gray-500 w-36">Región</p>
                        <p className="text-lg">Lima</p>
                    </div>
                    <div className="flex justify-start max-xl:flex-col">
                        <p className="text-gray-500 w-36">Provincia </p>
                        <p className="text-lg">Lima</p>
                    </div>
                    <div className="flex justify-start max-xl:flex-col">
                        <p className="text-gray-500 w-36">Distrito</p>
                        <p className="text-lg">Miraflores</p>
                    </div>
                    <div className="flex justify-start max-xl:flex-col">
                        <p className="text-gray-500 w-36">Dirección</p>
                        <p className="text-lg">Av. Larco 156</p>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-around gap-10">
                    <div className="flex justify-start max-xl:flex-col">
                        <p className="text-gray-500 w-36">Teléfono</p>
                        <p className="text-lg">+51 942 235 231</p>
                    </div>
                    <div className="flex justify-start max-xl:flex-col">
                        <p className="text-gray-500 w-36">Edad</p>
                        <p className="text-lg">51</p>
                    </div>
                    <div className="flex justify-start max-xl:flex-col">
                        <p className="text-gray-500 w-36">Nacimiento</p>
                        <p className="text-lg">15/08/1973</p>
                    </div>
                    <div className="flex justify-start max-xl:flex-col">
                        <p className="text-gray-500 w-36">Sexo</p>
                        <p className="text-lg">Hombre</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetailed;
