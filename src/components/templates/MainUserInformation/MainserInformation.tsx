import "./MainUserInformation.scss";
import LandingImage from "@/components/atoms/Images/LandingImage/LandingImage";
import Image from "next/image";

type MainUserInformationProps = {
  title: string;
  subtitle: string;
};

const MainUserInformation = ({ title, subtitle }: MainUserInformationProps) => {
  return (
    <div className="main_information flex justify-around flex-col items-center sm:flex-row">
      <div className="flex flex-col justify-center items-center sm:items-start px-10 gap-5">
        <div className="font-bold text-5xl max-w-md">{title}</div>
        <div className="text-xl max-w-md">{subtitle}</div>
      </div>
      <LandingImage />
    </div>
  );
};
export default MainUserInformation;
