import IUser from "../Interfaces/dataModel/IUser";

const doctorMockup: IUser = {
    _id: "doctor1",
    role: "doctor",
    name: "Rebeca Narvaez",
    email: "rebeca_narvaez@aika.com",
    password: "hashed_password",
    phone: "978546123",
    address: "Av. Larco 230",
    profile_picture: "/doctora.jpg",
    other_fields: {},
    reserved_appointments: [
        {date: "2023-09-10", appointments: ["appointment1", "appointment2"]},
        {date: "2023-09-11", appointments: ["appointment3", "appointment4","appointment5", "appointment6","appointment7" ]}
    ],
    ingresos: [
        {date: "2023-09-09", ingreso: "100"},
        {date: "2023-09-10", ingreso: "200"},
        {date: "2023-09-11", ingreso: "50"},
        {date: "2023-09-12", ingreso: "300"},
    ],
};
export default doctorMockup;