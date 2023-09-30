import { useState } from "react";
import { signIn } from "next-auth/react";


const useUserValidation = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const checkEmpty = (username: string, password: string) => {
    if (!username || !password) {
      throw new Error("Los campos no pueden estar vacíos");
    }
  }

  const handleSubmit = async () => {
    try {
        setLoading(true);
        checkEmpty(username, password)
        const userServer = await signIn("credentials", {
            email: username,
            password: password,
            redirect: false,
            role: "patient",
        });

        if (userServer?.error)
            throw new Error("Correo o contraseña incorrectos");
        setError("");
        setLoading(false);
        // router.push(Routes.PATIENT_HOME);

        // if (username === "doctor123" && password === "doctor123") {
        //     dispatch(userLogIn(doctorMockup));
        //     router.push(Routes.DOCTOR_HOME);
        //     return;
        // }
        // dispatch(userLogIn(patientReduxMockup));
    } catch (error: any) {
        setLoading(false);
        setError(error.message);
    }
};

  return {username, setUsername, password, setPassword, error, loading, handleSubmit}




};

export default useUserValidation;