import IMail from "@/utils/Interfaces/dataModel/IMail";
import { addDoc, collection } from "firebase/firestore";
import dbFirestore from "../config";

const SendMail = async  (to: string, subject: string, htmlContent: string) => {

    const emailObject: IMail = {
        message: {
            subject: subject,
            html: htmlContent
        },
        to: to
    }

    try{
        await addDoc(collection(dbFirestore, "mail"), emailObject); 
    } catch (e) {
        throw new Error("No se pudo envíar el mail, intente más tarde.");
    }   


}

export default SendMail;