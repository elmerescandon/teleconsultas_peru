import {collection, addDoc} from 'firebase/firestore';
import dbFirestore from '../config';
import IUserPost from '@/utils/Interfaces/API/Users/IUserPost';

const addUser = async (user: IUserPost) => {
    try {
        const docRef = await addDoc(collection(dbFirestore, "users"), user);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const registerUserPatient = async (registerPatient: IRegister) => {
    const user : IUserPost = {
        name: registerPatient.name,
        lastName: registerPatient.lastname,
        email: registerPatient.email,
        password: registerPatient.password,
        role: 'patient',
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
    await addUser(user);


}

export default addUser;