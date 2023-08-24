interface IAppointment {
    specialityId: string,
    doctorId: string,
    reason: string,
    symptoms: string[],
    details: string,
    date: string,
    startDate: string,
    endDate: string,
}

export default IAppointment;