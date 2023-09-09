interface IUserInfo {
    _id: string;
    role: "patient" | "doctor";
    name: string;
    email: string;
    specialties?: string[];
    phone: string;
    address: string;
    profile_picture: string;
    reserved_appointments?: {
        [date: string]: string[]; 
      };
    active_prescriptions?: string[];
    ingresos?: {date: string, ingreso: string}[];
}

export default IUserInfo;