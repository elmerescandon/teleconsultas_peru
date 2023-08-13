type CardFeatureProps = {
    title: string;
};

const CardFeature = ({ title }: CardFeatureProps) => {
    return (
        <div className="w-44 h-44 flex flex-col gap-5">
            <div>{title}</div>
        </div>
    );
};

export default CardFeature;
