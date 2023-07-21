"use client";
import Button from "@/components/atoms/Button/Button";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import AspectsInformation from "@/components/templates/AspectsInformation/AspectsInformation";
import { IAspectInformation } from "@/utils/interfaces/IAspectInformation";
import Image from "next/image";

const Patients = () => {
  const aspectsPatients: IAspectInformation[] = [
    {
      title: "Easy Registration",
      description:
        "Registering with MediConnect is quick and easy. Simply fill in your details and you’re ready to go.",
      icon: "📝",
    },
    {
      title: "Convenience Redefined",
      description:
        "With MediConnect, you can schedule appointments, have video consultations, and manage your healthcare from the comfort of your home or on-the-go using our user-friendly platform.",
      icon: "📱",
    },
    {
      title: "Swift and Secure Communication",
      description:
        "Our platform allows you to communicate with your doctor in a safe and secure manner, ensuring confidentiality and privacy.",
      icon: "🔒",
    },
    {
      title: "Flexible Payment Options",
      description:
        "We offer a variety of payment options, including credit card, debit card, and PayPal, making it easy for you to pay for your consultations.",
      icon: "💳",
    },
    {
      title: "Medical Records Management",
      description:
        "Our platform allows you to store and manage your medical records, making it easy for you to access them whenever you need to.",
      icon: "📂",
    },
  ];
  return (
    <main>
      <Header />
      <div className="patients">
        <div className="flex justify-center items-center">
          <div className="flex flex-col container gap-8 pl-10">
            <div className="text-red-400 font-semibold text-2xl">Patients</div>
            <div className="patients__title font-bold text-6xl">
              Elevate Your Healthcare Experience with MediConnect
            </div>
            <div className="patients__subtitle font-normal text-3xl">
              Quality Medical Consultations from the Comfort of Your Home
            </div>
            <Button content="More information" />
          </div>

          <div className="px-32">
            <Image
              src="/human_3.svg"
              alt="doctors-patient"
              width={900}
              height={900}
            />
          </div>
        </div>
        <div className="aspects-patients bg-red-300">
          <div className="flex justify-center items-center">
            <AspectsInformation aspects={aspectsPatients} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Patients;
