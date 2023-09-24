import IUser from "../Interfaces/dataModel/IUser";

const patientsMockup: IUser[] = [
    {
        _id: "patient1",
        role: "patient",
        name: "Pedro",
        lastName: "Navaja",
        email: "pedro_navaja@Salufy.com",
        password: "hashed_password",
        phone: "943186710",
        address: "Av. César Vallejo 350",
        profile_picture: "https://i.imgur.com/1OJ9Q3x.png",
        other_fields: {},
        reserved_appointments: [
            {
                date: "2023-09-3",
                appointments: ["appointment1", "appointment2"],
            },
            {
                date: "2023-09-4",
                appointments: ["appointment3", "appointment4"],
            },
        ],
        active_prescriptions: ["prescription1", "prescription2"],
    },
    {
        _id: "patient2",
        role: "patient",
        name: "Juan Pedro",
        lastName: "Alfonso",
        email: "juan_pedroa@Salufy.com",
        password: "hashed_password",
        phone: "943186710",
        address: "Av. César Vallejo 350",
        profile_picture: "https://i.imgur.com/1OJ9Q3x.png",
        other_fields: {},
        reserved_appointments: [
            {
                date: "2023-09-3",
                appointments: ["appointment1", "appointment2"],
            },
            {
                date: "2023-09-4",
                appointments: ["appointment3", "appointment4"],
            },
        ],
        active_prescriptions: ["prescription1", "prescription2"],
    },
    {
        _id: "patient3",
        role: "patient",
        name: "John",
        lastName: "Doe",
        email: "john_doe@Salufy.com",
        password: "hashed_password",
        phone: "943186710",
        address: "Av. César Vallejo 350",
        profile_picture: "https://i.imgur.com/1OJ9Q3x.png",
        other_fields: {},
        reserved_appointments: [
            {
                date: "2023-09-3",
                appointments: ["appointment1", "appointment2"],
            },
            {
                date: "2023-09-4",
                appointments: ["appointment3", "appointment4"],
            },
        ],
        active_prescriptions: ["prescription1", "prescription2"],
    },
];

export default patientsMockup;
