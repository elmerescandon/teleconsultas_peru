import IUser from "../Interfaces/dataModel/IUser";

const patientsMockup: IUser[] = [
    {
    _id: "patient1",
    role: "patient",
    name: "Pedro Navaja",
    email: "pedro_navaja@aika.com",
    password: "hashed_password",
    phone: "943186710",
    address: "Av. César Vallejo 350",
    profile_picture: "https://i.imgur.com/1OJ9Q3x.png",
    other_fields: {},
    reserved_appointments: [
        {date: "2023-09-3", appointments: ["appointment1", "appointment2"]},
        {date: "2023-09-4", appointments: ["appointment3", "appointment4"]},
    ],
    active_prescriptions: ["prescription1", "prescription2"],
    },
    {
    _id: "patient2",
    role: "patient",
    name: "Juan Pedro",
    email: "juan_pedroa@aika.com",
    password: "hashed_password",
    phone: "943186710",
    address: "Av. César Vallejo 350",
    profile_picture: "https://i.imgur.com/1OJ9Q3x.png",
    other_fields: {},
    reserved_appointments: [
        {date: "2023-09-3", appointments: ["appointment1", "appointment2"]},
        {date: "2023-09-4", appointments: ["appointment3", "appointment4"]},
    ],
    active_prescriptions: ["prescription1", "prescription2"],
    },
    {
    _id: "patient3",
    role: "patient",
    name: "John Doe",
    email: "john_doe@aika.com",
    password: "hashed_password",
    phone: "943186710",
    address: "Av. César Vallejo 350",
    profile_picture: "https://i.imgur.com/1OJ9Q3x.png",
    other_fields: {},
    reserved_appointments: [
        {date: "2023-09-3", appointments: ["appointment1", "appointment2"]},
        {date: "2023-09-4", appointments: ["appointment3", "appointment4"]},
    ],
    active_prescriptions: ["prescription1", "prescription2"],
    },
];

export default patientsMockup;