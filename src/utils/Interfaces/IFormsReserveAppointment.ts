interface IFormsReserveAppointment{
    firstName: string;
    lastName: string;
    speciality: string;
    doctorId: number;
    diseaseId: number;
    symptomsId: number[];
    details: string;
    date: Date;
    startDate: Date;
    endDate: Date;
}

export default IFormsReserveAppointment;