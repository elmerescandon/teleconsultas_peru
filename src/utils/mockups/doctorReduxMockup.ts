import IUserInfo from "@/redux/state-interfaces/User/IUserInfo";
import doctorMockup from "./doctorMockup";


const doctorReduxMockup : IUserInfo = {
    _id: doctorMockup._id,
    role: doctorMockup.role,
    name: doctorMockup.name,
    lastName: doctorMockup.lastName,
    email: doctorMockup.email,
    phone: doctorMockup.phone,
    address: doctorMockup.address,
    profile_picture: doctorMockup.profile_picture,
    reserved_appointments: doctorMockup.reserved_appointments,
    ingresos: doctorMockup.ingresos,
    district: doctorMockup.district,
    province: doctorMockup.province,
    region: doctorMockup.region,
    reference: doctorMockup.reference,
    interiorNumber: doctorMockup.interiorNumber,
    specialties: doctorMockup.specialties,
    active_prescriptions: doctorMockup.active_prescriptions,
    termsAndConditions: doctorMockup.termsAndConditions,
    age: doctorMockup.age,
};    

export default doctorReduxMockup;