import IUser from "../Interfaces/dataModel/IUser";

const patientMockup: IUser = {
    _id: "patient1",
    role: "patient",
    name: "Pedro Navaja",
    email: "pedro_navaja@aika.com",
    password: "hashed_password",
    phone: "943186710",
    address: "Av. César Vallejo 350",
    profile_picture: "https://i.imgur.com/1OJ9Q3x.png",
    other_fields: {},
    reserved_appointments: {
        ["2023-09-3"]: ["appointment1", "appointment2"],
        ["2023-09-4"]: ["appointment3", "appointment4"],
    },
    active_prescriptions: ["prescription1", "prescription2"],
};
export default patientMockup;