interface IDoctorAvailability {
    _id: string;
    doctor_id: string;
    specialty_id: string;
    availability_slots: {
      date: string;
      slots: {
        start_time: string;
        end_time: string;
        available: boolean;
      }[];
    }[];
    other_fields: any;
  }
  

export default IDoctorAvailability;