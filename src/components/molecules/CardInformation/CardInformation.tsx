import "./CardInformation.scss";
type CardInformationProps = {
  title: string;
  description: string;
  icon: string;
};

const CardInformation = ({
  title,
  description,
  icon,
}: CardInformationProps) => {
  return (
    <div className="card-information bg-white p-4 rounded-md shadow-md sm:w-64 w-3/4 h-80">
      <div className="text-2xl text-center mb-4">{icon}</div>
      <div className="font-bold text-lg text-center mb-2">{title}</div>
      <div className="text-center">{description}</div>
    </div>
  );
};

export default CardInformation;
