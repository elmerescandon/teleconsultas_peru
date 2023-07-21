import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import AspectsInformation from "@/components/templates/AspectsInformation/AspectsInformation";
import EmailSubscription from "@/components/templates/EmailSubscription/EmailSubscription";
import MainUserInformation from "@/components/templates/MainUserInformation/MainserInformation";
import SecondaryUserInformation from "@/components/templates/SecondaryUserInformation/SecondaryUserInformation";
import { IAspectInformation } from "@/utils/interfaces/IAspectInformation";
import { IDetailsInfo } from "@/utils/interfaces/IDetailsInfo";

const Home = () => {
  const infoHome =
    "Join MediConnect today and experience the future of healthcare - where convenience and technology converge to deliver a new era of medical consultations.";
  const advantagesData: IAspectInformation[] = [
    {
      title: "Accessible Healthcare",
      description:
        "With MediConnect, you can access medical consultations anytime, anywhere, eliminating the need to travel to a clinic or wait in long queues.",
      icon: "👩‍⚕️",
    },
    {
      title: "Expert Medical Advice",
      description:
        "Connect with highly qualified and experienced doctors from various specialties, ensuring you receive the best possible care.",
      icon: "🖊",
    },
    {
      title: "Convenience at Your Fingertips",
      description:
        "Schedule appointments, have video consultations, and manage your healthcare from the comfort of your home or on-the-go using our user-friendly platform",
      icon: "📱",
    },
    {
      title: "Safe and Secure",
      description:
        "Rest assured that your private medical information is protected with advanced encryption and secure servers, ensuring confidentiality.",
      icon: "🔒",
    },
    {
      title: "No Geographic Boundaries",
      description:
        "Access top-notch medical expertise from anywhere in the world, making quality healthcare accessible to all, regardless of location.",
      icon: "🌎",
    },
  ];

  const detailInfo: IDetailsInfo[] = [
    {
      title: "Empathy",
      description:
        "We prioritize understanding and compassion in all our interactions, ensuring that patients and doctors feel heard and valued.",
    },
    {
      title: "Reliability",
      description:
        "We commit to providing a dependable and secure platform for seamless online medical consultations, building trust among our users.",
    },
    {
      title: "Accessibility",
      description:
        "We believe that quality healthcare should be accessible to everyone, regardless of location or circumstance.",
    },
  ];

  return (
    <main>
      <Header />
      <div className="home">
        <MainUserInformation
          title="Welcome to MediConnect - Your Gateway to Convenient Healthcare."
          subtitle="Connecting Patients and Doctors for Seamless Online Medical Consultation."
        />
        <SecondaryUserInformation
          title="Your Health, Your Time, Your Way"
          info={infoHome}
          detailTitle="Why MediConnect?"
          detailInfo={detailInfo}
        />
        <AspectsInformation aspects={advantagesData} />
        <EmailSubscription />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
