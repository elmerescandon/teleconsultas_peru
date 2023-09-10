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
    other_fields?: any;
    reserved_appointments?: {
        date: string, appointments: string[]; 
      }[];
    active_prescriptions?: string[];
    ingresos: {date: string, ingreso: string}[];
}

export default IUser;