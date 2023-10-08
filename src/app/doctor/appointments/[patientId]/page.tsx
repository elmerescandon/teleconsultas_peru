import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import DoctorPatientSection from "@/components/Templates/DoctorPatientSection/DoctorPatientSection";

const page = ({ params }: { params: { patientId: string } }) => {
    const { patientId } = params;
    return (
        <div>
            <Header />
            {patientId ? (
                <DoctorPatientSection patientId={patientId} />
            ) : (
                <p>No existe el paciente</p>
            )}

            <Footer />
        </div>
    );
};

export default page;
