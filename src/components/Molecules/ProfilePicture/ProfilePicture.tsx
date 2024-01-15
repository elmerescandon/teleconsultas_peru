"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import InputFile from "@/components/Atoms/Inputs/InputFile/InputFile";
import { downloadData } from "@/firebase/generals/downloadData";
import { uploadData } from "@/firebase/generals/uploadData";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LoadingCircle from "../Loaders/LoadingCircle/LoadingCircle";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { useAppSelector } from "@/redux/hooks";
import LoadingHorizontal from "../Loaders/LoadingHorizontal/LoadingHorizontal";

const ProfilePicture = () => {
    const user: IUserState = useAppSelector((state) => state.user);
    const { userInfo } = user;
    const { _id } = userInfo;

    const [profilePic, setProfilePic] = useState<string>("");
    const [addProfilePic, setAddProfilePic] = useState<boolean>(false);
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [correct, setCorrect] = useState(false);

    const uploadPicture = async () => {
        try {
            setCorrect(false);
            setLoading(true);
            setError("");
            if (file === null) throw Error("Agrega un archivo primero");

            await uploadData("doctors", "profile_pictures", `${_id}.jpg`, file);
            setCorrect(true);
            setProfilePic("");
            setAddProfilePic(false);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const getProfilePic = async () => {
            const url = await downloadData(
                "doctors",
                "profile_pictures",
                `${_id}.jpg`
            );
            setProfilePic(url);
        };
        getProfilePic();
    }, [_id, profilePic]);
    return (
        <div
            className="flex gap-4 flex-col items-center
                max-md:w-full"
        >
            {profilePic ? (
                <img
                    src={profilePic}
                    alt="profile-main"
                    className="rounded-full h-52 w-full object-cover max-w-[200px]"
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
            {!addProfilePic && (
                <button
                    className="flex gap-4 items-center -ml-6"
                    onClick={() => {
                        setAddProfilePic(true);
                    }}
                >
                    <PlusCircleIcon className="h-8 w-8 text-brand-600" />
                    <span className="text-brand-600 text-lg">Cambiar foto</span>
                </button>
            )}
            {addProfilePic && (
                <div className="flex gap-5">
                    <InputFile
                        onChange={(file: File) => {
                            setFile(file);
                        }}
                    />
                    <div>
                        <ButtonPrimary onClickFn={uploadPicture}>
                            Subir
                        </ButtonPrimary>
                        {loading && <LoadingHorizontal />}
                    </div>

                    {error && (
                        <div className="text-red-500 w-full">{error}</div>
                    )}
                    {correct && (
                        <div className="text-green-500 w-full">
                            ¡Subido correctamente!
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProfilePicture;
