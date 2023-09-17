interface IUser {
  // TODO: Add terms and conditions as a required field
    _id: string;
    role: "patient" | "doctor";
    name: string;
    email: string;
    password: string;
    termsAndConditions?: boolean;
    phone: string;
    address: string;
    profile_picture: string; // TODO: Make Optional

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