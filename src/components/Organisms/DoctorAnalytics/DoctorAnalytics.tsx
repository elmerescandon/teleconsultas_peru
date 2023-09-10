import React from "react";

const DoctorAnalytics = () => {
    return (
        <div>
            <div className="text-2xl font-semibold pb-5">Analítica</div>
            <div className="flex gap-32 rounded-2xl bg-neutral-100 p-8 py-5">
                <div className="flex flex-col gap-4">
                    <div className="text-xl">Crecimiento Diario</div>
                    <div className="text-4xl font-semibold">{`3 por día`}</div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <p className="font-semibold">Nuevos Pacientes</p>
                        <p>515</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold">Pacientes Diarios</p>
                        <p>515</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorAnalytics;
