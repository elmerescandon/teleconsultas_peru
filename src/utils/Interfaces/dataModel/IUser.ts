interface IUser {
    _id: string;
    role: "patient" | "doctor";
    name: string;
    lastName: string;
    email: string;
    password: string;
    termsAndConditions?: boolean;
    phone: string;

    //  Location
    region?: string;
    province?: string;
    district?: string;
    address?: string;
    reference?: string;
    interiorNumber?: string;

    // Info
    age?: string;
    sex?: string;
    height?: string;
    weight?: string;
    bornDate?: string;

    profile_picture?: string;

    // Patient fields
    allergies?: string[];
    medicalHistory?: string[];

    // Doctor fields

    specialties?: string[];
    studies?: string[];
    curriculum?: string;
    cmpNumber?: string;
    cmpPicture?: string;
    availableHours?: {
      date: string,
      hours: string[]
    }[];

    other_fields?: any;
    reserved_appointments?: {
        date: string, appointments: string[]; 
      }[];
    active_prescriptions?: string[];
    ingresos?: {date: string, ingreso: string}[];
}

export default IUser;