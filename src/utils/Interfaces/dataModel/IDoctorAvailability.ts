import { DateValue } from "@/utils/alias/alias";

interface IDoctorAvailability {
    doctor_id: string;
    speciality_id: string;
    dateArray: DateValue[];
}


export default IDoctorAvailability;