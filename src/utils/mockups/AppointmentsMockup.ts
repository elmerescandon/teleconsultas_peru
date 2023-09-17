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
        diagnosis: ['Gastritis', 'Colitis'],
        treatment: ['Reposo', 'Dieta blanda'],
        prescription: ['Omeprazol', 'Loperamida'],
        summary: 'El paciente requiere reposo y dieta blanda. Se le recetó Omeprazol e Loperamida. Monitorear su progreso en la siguiente cita.'
    
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
        patientId: "patient2",
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
    {
        _id: "appointment4",
        patientId: "patient3",
        specialityId: "speciality2",
        startDate: "2023-08-25T10:00:00.000",
        endDate: "2023-08-25T10:30:00.000", 
        doctorId: "doctor3",
        date: "2023-08-24",
        details: "Dolor de pecho",
        reason: "Dolor de pecho",
        symptoms: ["Dolor de pecho", "Dolor de cabeza"],
        status: "scheduled",
    },  
    {
        _id: "appointment5",
        patientId: "patient2",
        specialityId: "speciality2",
        startDate: "2023-08-25T10:00:00.000",
        endDate: "2023-08-25T10:30:00.000", 
        doctorId: "doctor3",
        date: "2023-08-25",
        details: "Dolor de pecho",
        reason: "Dolor de pecho",
        symptoms: ["Dolor de pecho", "Dolor de cabeza"],
        status: "completed",
        diagnosis: ['Falta de sueño', 'Falta de ejercicio'],
        treatment: ['Dormir más', 'Hacer ejercicio'],
        prescription: ['Paracetamol', 'Ibuprofeno'],
        summary: 'El paciente requiere dormir más y hacer ejercicio. Se le recetó paracetamol e ibuprofeno. Monitorear su progreso en la siguiente cita.'
    },  
    {
        _id: "appointment6",
        patientId: "patient1",
        specialityId: "speciality2",
        startDate: "2023-08-27T10:00:00.000",
        endDate: "2023-08-27T10:30:00.000", 
        doctorId: "doctor3",
        date: "2023-08-27",
        details: "Dolor del corazón",
        reason: "Angina de pecho",
        symptoms: ["Mareos", "Dolor abdominal"],
        status: "completed",
        diagnosis: ['Taquicardia', 'Arritmia'],
        treatment: ['Tomar agua', 'Hacer ejercicio'],
        prescription: ['Tafil', 'Metoprolol'],
        summary: 'El paciente requiere tomar agua y hacer ejercicio. Se le recetó Tafil e Metoprolol. Monitorear su progreso en la siguiente cita.'
    },  
    {
        _id: "appointment7",
        patientId: "patient3",
        specialityId: "speciality2",
        startDate: "2023-08-29T10:00:00.000",
        endDate: "2023-08-29T10:30:00.000", 
        doctorId: "doctor3",
        date: "2023-08-29",
        details: "Dolor de estomago",
        reason: "Indigestión",
        symptoms: ["Nauseas", "Dolor abdominal","Diarea"],
        status: "completed",
        diagnosis: ['Gastritis', 'Colitis'],
        treatment: ['Reposo', 'Dieta blanda'],
        prescription: ['Omeprazol', 'Loperamida'],
        summary: 'El paciente requiere reposo y dieta blanda. Se le recetó Omeprazol e Loperamida. Monitorear su progreso en la siguiente cita.'
    },  
]

export default AppointmentsMockup;