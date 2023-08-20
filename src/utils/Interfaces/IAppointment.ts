interface IAppointment {
    id: number;
    specialty: string;
    startDate: Date;
    endDate: Date;
    doctorName: string;
    doctorLastName: string;
    patientName: string;
    patientLastName: string;
}

export default IAppointment;