import IUserInfo from "@/redux/state-interfaces/User/IUserInfo";
import IUser from "../Interfaces/dataModel/IUser";
export const dbToUser = (userDb: IUser) => {
    const user : IUserInfo = {
      _id: userDb._id,
      role: userDb.role,
      name: userDb.name,
      lastName: userDb.lastName,
      email: userDb.email,
      phone: userDb.phone,
      address: userDb.address!,
      profile_picture: userDb.profile_picture!,
      reserved_appointments: userDb.reserved_appointments,
      ingresos: userDb.ingresos,
      district: userDb.district!,
      province: userDb.province!,
      region: userDb.region!,
      reference: userDb.reference!,
      interiorNumber: userDb.interiorNumber!,
    }; 
    return user;
}