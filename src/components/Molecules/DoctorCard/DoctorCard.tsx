import { getSpecialityName } from "@/firebase/Speciality/getSpecialityName";
import { downloadData } from "@/firebase/generals/downloadData";
import IUser from "@/utils/Interfaces/dataModel/IUser";
import { doc } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type DoctorCardProps = {
    doctor: IUser;
};

const DoctorCard = ({ doctor }: DoctorCardProps) => {
    const { _id } = doctor;
    const [profilePic, setProfilePic] = useState<string>("");
    const [speciality, setSpeciality] = useState<string>("");

    useEffect(() => {
        const getProfilePic = async () => {
            const url = await downloadData(
                "doctors",
                "profile_pictures",
                `${_id}.jpg`
            );
            setProfilePic(url);
        };

        const getSpeciality = async (specialityId: string) => {
            const specialityObj = await getSpecialityName(specialityId);
            if (specialityObj) setSpeciality(specialityObj.name);
        };

        getProfilePic();
        if (doctor.specialities) {
            getSpeciality(doctor.specialities.toString());
        }
    }, [_id, profilePic]);
    return (
        <div className="flex items-center gap-5">
            {profilePic ? (
                <img
                    src={profilePic}
                    alt="profile-main"
                    className="rounded-full h-32"
                />
            ) : (
                <Image
                    src="/user-icon.jpg"
                    height={200}
                    width={200}
                    alt="profile-main"
                    className="rounded-full"
                />
            )}
            <div>
                <h1 className="text-brand-900 text-xl font-semibold">{`${doctor.name} ${doctor.lastName} `}</h1>
                <p>{`Especialidad: ${speciality}`}</p>
                <p>{`Colegiatura:-`}</p>
            </div>
        </div>
    );
};

export default DoctorCard;
