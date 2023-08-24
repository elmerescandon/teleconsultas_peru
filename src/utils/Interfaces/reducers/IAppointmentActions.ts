
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

type IAppointmentActionSetDate = {
    type: "SET_DATE",
    payload: string,
}

type IAppointmentActionSetTime = {
    type: "SET_TIME",
    payload: {startDate: string, endDate: string},
}


type IAppointmentActions = 
    IAppointmentActionSetSpeciality | 
    IAppointmentActionSetDoctor | 
    IAppointmentActionSetReason | 
    IAppointmentActionSetSymptoms | 
    IAppointmentActionSetDetails | 
    IAppointmentActionSetDate | 
    IAppointmentActionSetTime;

export default IAppointmentActions;
