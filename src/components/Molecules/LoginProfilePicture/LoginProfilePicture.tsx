import { downloadData } from "@/firebase/generals/downloadData";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type LoginProfilePictureProps = {
    size?: string;
};

const LoginProfilePicture = ({ size }: LoginProfilePictureProps) => {
    const user: IUserState = useAppSelector((state) => state.user);
    const { userInfo } = user;
    const { _id } = userInfo;
    const [profilePic, setProfilePic] = useState<string>("");

    useEffect(() => {
        const getProfilePic = async () => {
            if (_id === "") return;

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
        <div>
            {profilePic ? (
                <img
                    src={profilePic}
                    alt="profile-main"
                    className={`rounded-full ${
                        size === "main" ? "h-52" : "h-14"
                    }  w-full object-cover max-w-[${
                        size === "main" ? "250px" : "60px"
                    }]`}
                />
            ) : (
                <Image
                    src="/user-icon.jpg"
                    height={size === "main" ? 200 : 56}
                    width={size === "main" ? 200 : 56}
                    alt="profile-main"
                    className="rounded-full"
                />
            )}
        </div>
    );
};

export default LoginProfilePicture;
