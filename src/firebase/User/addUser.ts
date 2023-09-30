import {collection, addDoc} from 'firebase/firestore';
import dbFirestore from '../config';
import IUserPost from '@/utils/Interfaces/API/Users/IUserPost';
import { readPatientsSize } from './readUsersSize';
import { isUserValid } from './isUserValid';

const addUser = async (user: IUserPost) => {
    try {
        await addDoc(collection(dbFirestore, "users"), user);        
    } catch (e) {
        throw new Error("Error adding document: " + e);
    }
}

export const registerUser = async (registerPatient: IRegister, type: "patient" | "doctor") => {
    let user : IUserPost = {
        _id: "",
        name: registerPatient.name,
        lastName: registerPatient.lastname,
        email: registerPatient.email,
        password: registerPatient.password,
        role: type,
        id: registerPatient.id,
        phone: registerPatient.phone,
        termsAndConditions: true,
        
        region: registerPatient.region,
        province: registerPatient.province,
        district: registerPatient.district,
        address: registerPatient.address,
        reference: registerPatient.reference,
        interiorNumber: registerPatient.interiorNumber,

        age: registerPatient.age,
        sex: registerPatient.sex,
        height: registerPatient.height,
        weight: registerPatient.weight,
        bornDate: registerPatient.bornDate,
    } 

    if (!await isUserValid(user))
        return false

    const sizePatients = await readPatientsSize();
    const userId = sizePatients === undefined ? 1 : sizePatients + 1;
    user = {...user, _id: `${type}${userId}`}
    await addUser(user);
    return true;
}

export default addUser;