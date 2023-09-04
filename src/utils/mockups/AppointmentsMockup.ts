import IAppointment from "../Interfaces/reducers/IAppointment";

const AppointmentsMockup : IAppointment[] = [
    {
        _id: "appointment1",
        specialityId: "speciality1",
        startDate: "2023-08-21T10:00:00.000", // 2021-03-03 10:00:00
        endDate: "2023-08-21T10:30:00.000", // 2021-03-03 10:00:00
        doctorId: "doctor1",
        date: "2023-08-21",
        details: "Dolor de pecho",
        reason: "Dolor de pecho",
        symptoms: ["Dolor de pecho", "Dolor de cabeza"],
        status: "scheduled",
        patientId: "patient1",
    },    
    {
        _id: "appointment2",
        patientId: "patient1",
        specialityId: "speciality2",
        startDate: "2023-08-23T10:00:00.000", // 2021-03-03 10:00:00
        endDate: "2023-08-23T10:30:00.000", // 2021-03-03 10:00:00
        doctorId: "doctor2",
        date: "2023-08-23",
        details: "Dolor de pecho",
        reason: "Dolor de pecho",
        symptoms: ["Dolor de pecho", "Dolor de cabeza"],
        status: "scheduled",
    },  
    {
        _id: "appointment3",
        patientId: "patient1",
        specialityId: "speciality3",
        startDate: "2023-08-24T10:00:00.000",
        endDate: "2023-08-24T10:30:00.000", 
        doctorId: "doctor3",
        date: "2023-08-24",
        details: "Dolor de pecho",
        reason: "Dolor de pecho",
        symptoms: ["Dolor de pecho", "Dolor de cabeza"],
        status: "scheduled",
    },  
]

export default AppointmentsMockup;