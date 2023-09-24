interface IUserInfo {
    _id: string;
    role: "patient" | "doctor";
    name: string;
    email: string;
    phone: string;
    address: string;
    profile_picture: string;
    lastName: string;
    password?: string;
    //  Location
    region: string;
    province: string;
    district: string;
    reference: string;
    interiorNumber: string;
    //  Appointments
    reserved_appointments?: {
      date: string, appointments: string[]; 
    }[];
    specialties?: string[];
    active_prescriptions?: string[];
    ingresos?: {date: string, ingreso: string}[];
    termsAndConditions?: boolean;
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