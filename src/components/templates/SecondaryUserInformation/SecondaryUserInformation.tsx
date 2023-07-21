import "./SecondaryUserInformation.scss";
import LandingImage2 from "@/components/atoms/Images/LandingImage/LandingImage2";
import { IDetailsInfo } from "@/utils/interfaces/IDetailsInfo";
import Image from "next/image";

type SecondaryUserInformationProps = {
  title: string;
  info: string;
  detailTitle: string;
  detailInfo: IDetailsInfo[];
};

const SecondaryUserInformation = ({
  title,
  info,
  detailTitle,
  detailInfo,
}: SecondaryUserInformationProps) => {
  return (
    <div className="big-secondary-info bg-sky-blue">
      <div className="secondary-info flex flex-col sm:flex-row justify-center items-center gap-5 px-10 bg-sky-blue py-10">
        <div>
          <LandingImage2 />
        </div>
        <div className="flex flex-col items-center sm:items-start gap-2">
          <div className="font-bold text-3xl max-w-md">{title}</div>
          <div className="text-lg max-w-md">{info}</div>
        </div>
        <div className="w-96">
          <p className="text-2xl font-bold mb-2 pb-4">{detailTitle}</p>
          <ul className="list-disc ml-6">
            {detailInfo.map((detail, index) => (
              <li className="mb-1 pb-3" key={index}>
                <div className="font-bold flex gap-3 items-center pb-3">
                  <Image
                    src="/check_v2.png"
                    alt="check"
                    width={22}
                    height={22}
                  />
                  <p className="text-md">{detail.title}</p>
                </div>
                <div>{detail.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecondaryUserInformation;
