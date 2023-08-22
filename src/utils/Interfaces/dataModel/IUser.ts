interface IUser {
    _id: string;
    role: "patient" | "doctor";
    name: string;
    email: string;
    password: string;
    specialties?: string[];
    phone: string;
    address: string;
    profile_picture: string;
    other_fields: any;
}

export default IUser;