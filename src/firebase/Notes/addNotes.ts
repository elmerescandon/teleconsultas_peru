import {collection, addDoc, query, where, getDocs, updateDoc, doc} from 'firebase/firestore';
import dbFirestore from '../config';
import INotes from '@/utils/Interfaces/dataModel/INotes';

const addNotesData = async (appointmentId: string, role: string, text: string) => {

    const encryptedText = btoa(text);

    try {
        const q = query(collection(dbFirestore, "notes"), where("appointmentId", "==", appointmentId));
        const snapShot = await getDocs(q);
        if (snapShot.empty) {
            const newNotes : INotes = {
                _id: appointmentId,
                appointmentId: appointmentId,
                doctorNotes: role === "doctor" ? encryptedText : "",
                patientNotes: role === "patient" ? encryptedText : ""
            }
            await addDoc(collection(dbFirestore, "notes"), newNotes); 
            return;       
        }

        const notes = snapShot.docs[0];
        await updateDoc(doc(dbFirestore, "notes", notes.id), {
            doctorNotes: role === "doctor" ? encryptedText : notes.data().doctorNotes,
            patientNotes: role === "patient" ? encryptedText : notes.data().patientNotes
        });

    } catch (e) {
        throw new Error("No se pudo agregar las notas");
    }
}



export default addNotesData;