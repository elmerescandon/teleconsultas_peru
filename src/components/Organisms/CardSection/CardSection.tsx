import CardFeature from "@/components/Molecules/CardFeature/CardFeature";
import cardsContent from "@/utils/content/home/CardsContent";

const CardSection = () => {
    return (
        <div className="flex gap-8 justify-center">
            {cardsContent.map((cardContent, index) => {
                return (
                    <CardFeature
                        key={index}
                        iconComponent={cardContent.logo}
                        title={cardContent.title}
                    />
                );
            })}
        </div>
    );
};

export default CardSection;
