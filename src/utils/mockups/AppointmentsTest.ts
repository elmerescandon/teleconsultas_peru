import IAppointment from "../Interfaces/reducers/IAppointment";

const AppointmentTest : IAppointment[] = [
    {
        specialityId: "Cardiología",
        startDate: "2023-08-21T10:00:00.000", // 2021-03-03 10:00:00
        endDate: "2023-08-21T10:30:00.000", // 2021-03-03 10:00:00
        doctorId: "Juan",
        date: "2023-08-21",
        details: "Dolor de pecho",
        reason: "Dolor de pecho",
        symptoms: ["Dolor de pecho", "Dolor de cabeza"],
    },    
]

export default AppointmentTest;