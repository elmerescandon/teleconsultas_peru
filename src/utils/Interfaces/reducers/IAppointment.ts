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
    // Doctor Side
    price?: number,
    diagnosis?: string[],
    treatment?: string[],
    prescription?: string[],
    summary?: string,    
    joinURL?: string,
}

export default IAppointment;