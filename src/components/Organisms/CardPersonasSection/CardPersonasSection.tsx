import CardPerson from "@/components/Molecules/CardPerson/CardPerson";
import ICardPerson from "@/utils/Interfaces/ICardPerson";
import React from "react";

type CardPersonasSectionProps = {
    persons: ICardPerson[];
};

const CardPersonasSection = ({ persons }: CardPersonasSectionProps) => {
    return (
        <div className="py-10 flex justify-center gap-16 flex-wrap">
            {persons.map((person, index) => {
                return (
                    <CardPerson
                        key={index}
                        imagePath={person.image}
                        label={person.label}
                        name={person.name}
                    />
                );
            })}
        </div>
    );
};

export default CardPersonasSection;
