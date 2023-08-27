interface IUserInfo {
    _id: string;
    role: "patient" | "doctor";
    name: string;
    email: string;
    phone: string;
    address: string;
    profile_picture: string;
}

export default IUserInfo;