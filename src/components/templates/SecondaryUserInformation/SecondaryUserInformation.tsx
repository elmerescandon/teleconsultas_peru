import "./SecondaryUserInformation.scss";
import LandingImage2 from "@/components/atoms/Images/LandingImage/LandingImage2";

type SecondaryUserInformationProps = {
  title: string;
  info: string;
};

const SecondaryUserInformation = ({
  title,
  info,
}: SecondaryUserInformationProps) => {
  return (
    <div className="big-secondary-info bg-sky-blue">
      <div className="secondary-info flex flex-col sm:flex-row justify-center items-center gap-5 px-10 bg-sky-blue">
        <div>
          <LandingImage2 />
        </div>
        <div className="flex flex-col items-center sm:items-start gap-2">
          <div className="font-bold text-3xl max-w-md">{title}</div>
          <div className="text-lg max-w-md">{info}</div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryUserInformation;
