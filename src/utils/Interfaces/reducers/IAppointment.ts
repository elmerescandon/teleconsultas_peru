interface IAppointment {
    _id: string,
    patientId: string,
    doctorId: string,
    startDate: string,
    date: string,
    endDate: string,
    status: 'scheduled' | 'completed' | 'canceled' | 'pending',
    reason: string,
    details: string,
    specialityId: string,
    symptoms: string[],
}

export default IAppointment;