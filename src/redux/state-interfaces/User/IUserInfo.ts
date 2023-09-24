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
      date: string, appointments: string[]; 
    }[];
    active_prescriptions?: string[];
    ingresos?: {date: string, ingreso: string}[];

    lastName: string;
    password: string;
    termsAndConditions?: boolean;

    //  Location
    region: string;
    province: string;
    district: string;
    reference: string;
    interiorNumber: string;

    // Info
    age?: string;
    sex?: string;
    height?: string;
    weight?: string;
    bornDate?: string;


    // Patient fields
    allergies?: string[];
    medicalHistory?: string[];

    // Doctor fields

    studies?: string[];
    curriculum?: string;
    cmpNumber?: string;
    cmpPicture?: string;
    availableHours?: {
      date: string,
      hours: string[]
    }[];

    other_fields?: any;
}

export default IUserInfo;