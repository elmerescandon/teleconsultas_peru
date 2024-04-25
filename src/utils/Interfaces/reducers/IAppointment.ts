import {DateValue} from "@/utils/alias/alias";

interface IAppointment {
  _id: string;
  patientId: string;
  doctorId: string;
  startDate: DateValue | null;
  date: DateValue | null;
  endDate: DateValue | null;
  status:
    | "pre-reserved"
    | "scheduled"
    | "completed"
    | "canceled"
    | "pending"
    | "doctor-canceled"
    | "patient-canceled"
    | "doctor-canceled/scheduled"
    | "doctor-canceled/pending";
  reason: string;
  details: string;
  specialityId: string;
  symptoms: string[];
  // Doctor Side
  price?: number;
  diagnosis?: string[];
  treatment?: string[];
  prescription?: string[];
  summary?: string;
  joinURL?: string;
}

export default IAppointment;
