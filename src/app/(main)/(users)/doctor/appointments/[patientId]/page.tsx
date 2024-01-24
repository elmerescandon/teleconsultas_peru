import DoctorPatientSection from "@/components/Templates/DoctorPatientSection/DoctorPatientSection";

const page = ({ params }: { params: { patientId: string } }) => {
    const { patientId } = params;
    return (
        <div>
            {patientId ? (
                <DoctorPatientSection patientId={patientId} />
            ) : (
                <p>No existe el paciente</p>
            )}
        </div>
    );
};

export default page;
