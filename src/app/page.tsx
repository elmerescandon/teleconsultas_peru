import Header from "@/components/organisms/Header/Header";
import AspectsInformation from "@/components/templates/AspectsInformation/AspectsInformation";
import MainUserInformation from "@/components/templates/MainUserInformation/MainserInformation";
import SecondaryUserInformation from "@/components/templates/SecondaryUserInformation/SecondaryUserInformation";

const Home = () => {
  const infoHome =
    "Join MediConnect today and experience the future of healthcare - where convenience and technology converge to deliver a new era of medical consultations.";
  return (
    <main>
      <Header />
      <MainUserInformation
        title="Welcome to MediConnect - Your Gateway to Convenient Healthcare."
        subtitle="Connecting Patients and Doctors for Seamless Online Medical Consultation."
      />
      <SecondaryUserInformation
        title="Your Health, Your Time, Your Way"
        info={infoHome}
      />
      <AspectsInformation />
    </main>
  );
};

export default Home;
