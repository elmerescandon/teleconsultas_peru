import DoctorCard from "@/components/Molecules/DoctorCard/DoctorCard";
import { getDoctorsFromSpeciality } from "@/firebase/Doctor/getDoctorsFromSpeciality";
import IUser from "@/utils/Interfaces/dataModel/IUser";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

type PopUpDoctorList = {
    onClose: () => void;
    specialityId: string;
};

const PopUpDoctorList = ({ onClose, specialityId }: PopUpDoctorList) => {
    const [doctors, setDoctors] = useState<IUser[]>([]);
    useEffect(() => {
        const getDoctorsFromDb = async (specialityId: string) => {
            const doctors = await getDoctorsFromSpeciality(specialityId);
            if (doctors) {
                setDoctors(doctors);
            }
        };

        if (specialityId === "") {
            setDoctors([]);
        } else {
            getDoctorsFromDb(specialityId);
        }
    }, [specialityId]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div
                className="bg-white p-10 rounded-3xl flex flex-col gap-5 h-3/4 w-1/2 overflow-auto
                                max-2xl:px-10
                                max-lg:w-10/12"
            >
                <div className="flex justify-between items-center">
                    <h2
                        className="text-3xl font-semibold
                                max-lg:text-2xl"
                    >
                        Nuestros doctores en
                    </h2>
                    <button onClick={onClose}>
                        <XMarkIcon className="w-10 h-10 ml-auto" />
                    </button>
                </div>
                <div className="px-5 ">
                    {doctors.map((doctor) => (
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopUpDoctorList;
