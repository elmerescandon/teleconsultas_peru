import "./AspectsInformation.scss";
import CardInformation from "@/components/molecules/CardInformation/CardInformation";

type AdvantageData = {
  title: string;
  description: string;
  icon: string;
};

const AspectsInformation = () => {
  // Sample advantages data for demonstration purposes
  const advantagesData: AdvantageData[] = [
    {
      title: "Easy to Use",
      description:
        "The app is designed with a user-friendly interface, making it easy for everyone to use.",
      icon: "🚀",
    },
    {
      title: "Fast Performance",
      description:
        "Experience lightning-fast performance and smooth user interactions.",
      icon: "⚡️",
    },
    {
      title: "Secure",
      description:
        "Rest assured that your data is safe and protected with our robust security measures.",
      icon: "🔒",
    },
    {
      title: "Customizable",
      description:
        "Tailor the app to fit your needs with various customization options.",
      icon: "🎨",
    },
    {
      title: "24/7 Support",
      description:
        "Our support team is available round the clock to assist you whenever you need help.",
      icon: "📞",
    },
  ];

  return (
    <div className="big-aspects-information">
      <div className="aspects-information p-12 w-full flex justify-center">
        <div className="flex flex-col flex-wrap sm:flex-row justify-center items-center gap-8">
          {advantagesData.map((advantage, index) => (
            <CardInformation
              key={index}
              title={advantage.title}
              description={advantage.description}
              icon={advantage.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AspectsInformation;
