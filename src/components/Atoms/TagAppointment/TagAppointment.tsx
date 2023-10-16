import React, { useEffect, useState } from "react";
import PopUpAppointment from "../PopUp/PopUpAppointment/PopUpAppointment";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { getSpecialityName } from "@/utils/functions/utils";
import specialitiesMockup from "@/utils/mockups/specialitiesMockup";
import useAppointmentInfo from "@/utils/hooks/useAppointmentInfo";

type TagAppointmentProps = {
    appointment: IAppointment;
    onClickFn: () => void;
};

const TagAppointment = ({ appointment, onClickFn }: TagAppointmentProps) => {
    const [popUpOpen, setPopUpOpen] = useState(false);

    const [dimensions, setDimensions] = useState({
        height: 3000,
        width: 3000,
    });

    const { specialityId, patientId, doctorId } = appointment;
    const { summary } = useAppointmentInfo(doctorId, specialityId, patientId);

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <button
                onClick={() => {
                    setPopUpOpen(true);
                }}
            >
                <div className="bg-brand-600 text-basic-white px-2 py-1 rounded text-ellipsis whitespace-nowrap overflow-hidden">
                    {dimensions.width >= 1024 ? summary.specialityName : "..."}
                </div>
            </button>

            {popUpOpen && (
                <PopUpAppointment
                    onClose={() => setPopUpOpen(false)}
                    appointment={appointment}
                />
            )}
        </div>
    );
};

export default TagAppointment;
