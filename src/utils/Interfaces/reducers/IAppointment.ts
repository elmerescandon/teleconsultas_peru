interface IAppointment {
    specialityId: string,
    doctorId: string,
    reason: string,
    symptoms: string[],
    details: string,
    startDate: string,
    endDate: string,
}

export default IAppointment;