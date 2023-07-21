import Button from "@/components/atoms/Button/Button";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import AspectsInformation from "@/components/templates/AspectsInformation/AspectsInformation";
import { IAspectInformation } from "@/utils/interfaces/IAspectInformation";
import Image from "next/image";
import React from "react";

const Doctors = () => {
  const aspectsDoctors: IAspectInformation[] = [
    {
      title: "Global Patient Reach",
      description:
        "Expand your patient reach beyond borders and serve patients from all over the world.",
      icon: "🌎",
    },
    {
      title: "Flexible Scheduling",
      description:
        "Our platform allows you to schedule appointments at your convenience.",
      icon: "📅",
    },
    {
      title: "Secure and Compliant Platform",
      description:
        "Our platform is HIPAA and GDPR compliant, ensuring that your patients’ data is safe and secure.",
      icon: "🔒",
    },
    {
      title: "Efficient Appointment Management",
      description:
        "Our platform allows you to manage your appointments efficiently, ensuring that you never miss a consultation.",
      icon: "📝",
    },
    {
      title: "Supplemental Income Stream",
      description:
        "Our platform allows you to earn additional income by serving patients from all over the world.",
      icon: "💰",
    },
  ];

  return (
    <main>
      <Header />
      <div className="doctors">
        <div className="flex justify-center items-center">
          <div className="flex flex-col container gap-8 pl-10">
            <div className="text-indigo-400 font-semibold text-2xl">
              Doctors
            </div>
            <div className="patients__title font-bold text-6xl">
              Expand Your Medical Practice with MediConnect
            </div>
            <div className="patients__subtitle font-normal text-3xl">
              Reach and Serve Patients Beyond Borders through Online
              Consultations
            </div>
            <Button content="More information" />
          </div>

          <div className="px-32">
            <Image
              src="/human_1.svg"
              alt="doctors-patient"
              width={800}
              height={800}
            />
          </div>
        </div>
        <div className="aspects-doctors bg-indigo-300">
          <AspectsInformation aspects={aspectsDoctors} />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Doctors;
