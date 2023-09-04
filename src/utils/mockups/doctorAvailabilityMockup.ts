import IDoctorAvailability from "../Interfaces/dataModel/IDoctorAvailability";

const doctorAvailabilityMockup: IDoctorAvailability[] = [{
    _id: "availability1",
    doctor_id: "doctor1",
    speciality_id: "speciality1",
    availability_slots: [
      {
        date: "2023-08-24",
        slots: [
          { startDate: "2023-08-21T10:00:00.000", endDate: "2023-08-21T10:30:00.000", available: false },
          { startDate: "2023-08-21T11:00:00.000", endDate: "2023-08-21T11:30:00.000", available: true },
          { startDate: "2023-08-21T13:00:00.000", endDate: "2023-08-21T13:30:00.000", available: true },
          { startDate: "2023-08-21T14:00:00.000", endDate: "2023-08-21T14:30:00.000", available: true },
          { startDate: "2023-08-21T15:00:00.000", endDate: "2023-08-21T15:30:00.000", available: true }
        ]
      },
      {
        date: "2023-08-22",
        slots: [
          { startDate: "2023-08-22T12:00:00.000", endDate: "2023-08-22T12:30:00.000", available: true },
          { startDate: "2023-08-22T13:00:00.000", endDate: "2023-08-22T13:30:00.000", available: false }
        ]
      }
    ],
    other_fields: {}
  }, 
];

export default doctorAvailabilityMockup;