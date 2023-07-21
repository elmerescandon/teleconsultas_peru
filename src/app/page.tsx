import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import AspectsInformation from "@/components/templates/AspectsInformation/AspectsInformation";
import EmailSubscription from "@/components/templates/EmailSubscription/EmailSubscription";
import MainUserInformation from "@/components/templates/MainUserInformation/MainserInformation";
import SecondaryUserInformation from "@/components/templates/SecondaryUserInformation/SecondaryUserInformation";

const Home = () => {
  const infoHome =
    "Join MediConnect today and experience the future of healthcare - where convenience and technology converge to deliver a new era of medical consultations.";
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
        />
        <AspectsInformation />
        <EmailSubscription />
      </div>

      <Footer />
    </main>
  );
};

export default Home;
