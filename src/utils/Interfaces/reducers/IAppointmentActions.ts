
type IAppointmentActionSetSpeciality = {
    type: "SET_SPECIALITY",
    payload: string,
}

type IAppointmentActionSetDoctor = {
    type: "SET_DOCTOR",
    payload: string,
}

type IAppointmentActionSetReason = {
    type: "SET_REASON",
    payload: string,
}

type IAppointmentActionSetSymptoms = {
    type: "SET_SYMPTOMS",
    payload: string[],
}

type IAppointmentActionSetDetails = {
    type: "SET_DETAILS",
    payload: string,
}

type IAppointmentActions = IAppointmentActionSetSpeciality | IAppointmentActionSetDoctor | IAppointmentActionSetReason | IAppointmentActionSetSymptoms | IAppointmentActionSetDetails;

export default IAppointmentActions;
