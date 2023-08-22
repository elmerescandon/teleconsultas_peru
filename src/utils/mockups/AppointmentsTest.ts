import IAppointment from "../Interfaces/reducers/IAppointment";

const AppointmentTest : IAppointment[] = [
    {
        id: 1,
        specialty: "Cardiología",
        startDate: new Date(2023, 7, 10, 10), // 2021-03-03 10:00:00
        endDate: new Date(2023, 7, 10, 11), // 2021-03-03 10:00:00
        doctorName: "Juan",
        doctorLastName: "Perez",
        patientName: "Pedro",
        patientLastName: "Gomez"
    },
    // Create new IAppointment objects here
    {
        id: 2,
        specialty: "Medicina General",
        startDate: new Date(2023, 7, 16, 19), // 2021-03-03 10:00:00
        endDate: new Date(2023, 7, 16, 11), // 2021-03-03 10:00:00
        doctorName: "Maria",
        doctorLastName: "Cortes",
        patientName: "Pedro",
        patientLastName: "Gomez"
    },
    {
        id: 3,
        specialty: "Otorrinolaringología",
        startDate: new Date(2023, 7, 25, 14), // 2021-03-03 10:00:00
        endDate: new Date(2023, 7, 25, 15), // 2021-03-03 10:00:00
        doctorName: "Pedro",
        doctorLastName: "Fernandez",
        patientName: "Pedro",
        patientLastName: "Gomez"
    },     
]

export default AppointmentTest;