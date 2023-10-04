import PopUpAppointment from "@/components/Atoms/PopUp/PopUpAppointment/PopUpAppointment";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {
    getDoctorNameMockup as getDoctorName,
    getSpecialityName,
    stringToDate,
} from "@/utils/functions/utils";
import doctorsMockup from "@/utils/mockups/doctorsMockup";
import specialitiesMockup from "@/utils/mockups/specialitiesMockup";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

type PatientDateProps = {
    appointment: IAppointment;
};

const PatientDate = ({ appointment }: PatientDateProps) => {
    // TODO: Add call from API to get Specialities
    const [popUpOpen, setPopUpOpen] = useState(false);
    const { doctorId, specialityId, date } = appointment;
    return (
        <div className="w-full">
            <button
                className="flex items-center w-full px-10 py-3 justify-between bg-brand-600 text-basic-white rounded-3xl"
                onClick={() => setPopUpOpen(true)}
            >
                <div>
                    <div>
                        {getSpecialityName(specialitiesMockup, specialityId)}
                    </div>
                    <div>{stringToDate(date)}</div>
                </div>
                <div className="w-36 text-left">
                    {getDoctorName(doctorsMockup, doctorId)}
                </div>
                <div className="flex gap-3 items-center">
                    <p className="text-brand-50">Ver más</p>
                    <BookOpenIcon className="w-8 h-8 text-brand-100" />
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

export default PatientDate;
