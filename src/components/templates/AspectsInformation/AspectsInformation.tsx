import { AspectInformation } from "@/utils/interfaces/AspectInformation";
import "./AspectsInformation.scss";
import CardInformation from "@/components/molecules/CardInformation/CardInformation";

type AspectsInformationProps = {
  aspects: AspectInformation[];
};

const AspectsInformation = ({ aspects }: AspectsInformationProps) => {
  // Sample advantages data for demonstration purposes
  return (
    <div className="big-aspects-information">
      <div className="aspects-information p-12 w-full flex justify-center">
        <div className="flex flex-col flex-wrap sm:flex-row justify-center items-center gap-8">
          {aspects.map((advantage, index) => (
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
