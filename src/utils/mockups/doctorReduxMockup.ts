import IUserInfo from "@/redux/state-interfaces/User/IUserInfo";
import doctorMockup from "./doctorMockup";


const doctorReduxMockup : IUserInfo = {
    _id: doctorMockup._id,
    role: doctorMockup.role,
    name: doctorMockup.name,
    email: doctorMockup.email,
    phone: doctorMockup.phone,
    address: doctorMockup.address,
    profile_picture: doctorMockup.profile_picture,
    reserved_appointments: doctorMockup.reserved_appointments,
    ingresos: doctorMockup.ingresos,
};    

export default doctorReduxMockup;