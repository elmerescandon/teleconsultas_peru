import { generateLostPasswordCode } from "@/utils/functions/utilsPassword";
import activateLostPassword from "../Password/activateLostPassword";
import { getUserId } from "../User/getUserId";
import { isUserValidMail } from "../User/isUserValidMail";
import SendMail from "./SendMail";
import checkLostPassword from "../Password/checkLostPassword";

const SendLostPassword  = async (email: string, role: string) => {
    let userExists = false;

    try {
        userExists = await isUserValidMail(email, role);
    } catch (e) {
        throw new Error("No se pudo verificar su usuario, inténtelo más tarde.");
    }


    if (userExists) {
        const generatedCode = generateLostPasswordCode();

        const userId = await getUserId(email, role);
        if (!userId) throw new Error("No se pudo obtener el id del usuario.");

        try {
            if (await checkLostPassword(userId)) {
                throw new Error("Ya se envío un código de recuperación. Revise su correo.");
            }
        } catch (e) {
            throw e;
        }

        try {
            await activateLostPassword(generatedCode, userId);
        } catch (e) {
            throw new Error("No se pudo generar el código de recuperación, intente más tarde.");
        }


        const subject = "Código de recuperación de contraseña";
        const htmlContent = `Su código de recuperación de contraseña como ${role === 'patient' ? "paciente" : "doctor"} es: ${generatedCode}`;

        try{
            await SendMail(email, subject, htmlContent);
        } catch (e) {
            throw new Error("No se pudo envíar el mail, intente más tarde.");
        }
    } else{
        throw new Error("El usuario no existe.");
    }

}

export default SendLostPassword;