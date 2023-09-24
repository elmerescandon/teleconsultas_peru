import {collection, getDocs, query, where} from 'firebase/firestore';
import dbFirestore from '../config';

export const readPatientsSize = async () => {
    const q = query(collection(dbFirestore, "users"), where("role", "==", "patient"));
    try{
        const querySnapshot = await getDocs(q);
        return querySnapshot.size;
    } catch (e) {
        throw new Error("Error getting documents: " + e);
    }
}

export const readDoctorsSize = async () => {
    const q = query(collection(dbFirestore, "users"), where("role", "==", "doctor"));
    try{
        const querySnapshot = await getDocs(q);
        return querySnapshot.size;
    } catch (e) {
        throw new Error("Error getting documents: " + e);
    }
}

