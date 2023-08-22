import IDoctorAvailability from "../Interfaces/dataModel/IDoctorAvailability";

const doctorAvailabilityMockup: IDoctorAvailability = {
    _id: "availability456",
    doctor_id: "doctor123",
    specialty_id: "specialty789",
    availability_slots: [
      {
        date: "2023-08-21",
        slots: [
          { start_time: "09:00 AM", end_time: "09:30 AM", available: true },
          { start_time: "09:30 AM", end_time: "10:00 AM", available: true }
        ]
      },
      {
        date: "2023-08-22",
        slots: [
          { start_time: "09:00 AM", end_time: "09:30 AM", available: true },
          { start_time: "09:30 AM", end_time: "10:00 AM", available: false }
        ]
      }
    ],
    other_fields: {}
  };

export default doctorAvailabilityMockup;