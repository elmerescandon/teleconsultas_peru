import {collection, addDoc} from 'firebase/firestore';
import dbFirestore from '../config';
import IUser from '@/utils/Interfaces/dataModel/IUser';

const addUser = async (user: IUser) => {
    try {
        const docRef = await addDoc(collection(dbFirestore, "users"), user);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export default addUser;