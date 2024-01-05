import {collection, addDoc} from 'firebase/firestore';
import dbFirestore from '../config';
import IUserPost from '@/utils/Interfaces/API/Users/IUserPost';
import { readDoctorsSize, readPatientsSize } from './readUsersSize';
import { isUserValid } from './isUserValid';
import { uploadDoctorData } from '../Doctor/uploadDoctorData';

const addUser = async (user: IUserPost) => {
    try {
        await addDoc(collection(dbFirestore, "users"), user);        
    } catch (e) {
        throw new Error("Error adding document: " + e);
    }
}

export const registerUser = async (registerPatient: IRegister & IRegisterDoctor, type: "patient" | "doctor") => {
    
    let user : IUserPost = type === "patient" ? {
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
    } : {
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
        specialities: registerPatient.specialities,
    }

    
    if (!await isUserValid(user))
        return false

    const sizePatients = await readPatientsSize();
    const sizeDoctors = await readDoctorsSize();
    const userIdPatient = sizePatients === undefined ? 1 : sizePatients + 1;
    const userIdDoctor = sizeDoctors === undefined ? 1 : sizeDoctors + 1;
    const userId = type === "patient" ? userIdPatient : userIdDoctor;
    user = {...user, _id: `${type}${userId}`}
    await addUser(user);

    // Agregar Info de Doctor
    if (type === "doctor"){
        if (registerPatient.curriculum !== null)
            uploadDoctorData(registerPatient.curriculum, `${type}${userId}.pdf`, 'curriculum');

        if (registerPatient.cmpNumber !== null)
            uploadDoctorData(registerPatient.cmpNumber, `${type}${userId}.pdf`, 'colegiatura');
    }
    return true;
}

export default addUser;