import IUserInfo from "@/redux/state-interfaces/User/IUserInfo";
import patientMockup from "./patientMockup";


const patientReduxMockup : IUserInfo = {
    _id: patientMockup._id,
    role: patientMockup.role,
    name: patientMockup.name,
    email: patientMockup.email,
    phone: patientMockup.phone,
    address: patientMockup.address,
    profile_picture: patientMockup.profile_picture,
    reserved_appointments: patientMockup.reserved_appointments,
    active_prescriptions: patientMockup.active_prescriptions,
};    

export default patientReduxMockup;