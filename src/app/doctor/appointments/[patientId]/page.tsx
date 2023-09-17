import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import React from "react";

const page = ({ params }: { params: { patientId: string } }) => {
    return (
        <div>
            <Header />
            My Patient Id: {params.patientId}
            <Footer />
        </div>
    );
};

export default page;
