import IUser from "../Interfaces/dataModel/IUser";

const doctorUserMockup: IUser = {
    _id: "doctor123",
    role: "doctor",
    name: "Dr. Smith",
    lastName: "Smith",
    email: "dr.smith@example.com",
    password: "hashed_password",
    specialties: ["Cardiology", "Internal Medicine"],
    phone: "123-456-7890",
    address: "123 Medical St, City",
    profile_picture: "http://example.com/profile.jpg",
    other_fields: {}
};
export default doctorUserMockup;