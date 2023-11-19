import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ICardContent from "@/utils/Interfaces/ICardContent";
import CardFeature from "@/components/Molecules/CardFeature/CardFeature";
import "./CardSectionMobile.scss";

const CardSectionMobile = () => {
    const [width, setWidth] = useState<number>(0);
    const carousel = useRef() as MutableRefObject<HTMLDivElement>;
    const cardsContent: ICardContent[] = [
        {
            title: "A un click de distancia",
            logo: (
                <Image
                    src="./icons/ICON_SEGURIDAD.svg"
                    alt="salufy-icon-corazon"
                    width={150}
                    height={150}
                />
            ),
        },
        {
            title: "Privacidad y seguridad",
            logo: (
                <Image
                    src="./icons/ICON_CORAZON.svg"
                    alt="salufy-icon-corazon"
                    width={150}
                    height={150}
                />
            ),
        },
        {
            title: "Reserva de citas inmediata",
            logo: (
                <Image
                    src="./icons/ICON_CALENDARIO.svg"
                    alt="salufy-icon-corazon"
                    width={150}
                    height={150}
                />
            ),
        },
        {
            title: "Consultas por videollamada",
            logo: (
                <Image
                    src="./icons/ICON_VIDEOLLAMADA.svg"
                    alt="salufy-icon-corazon"
                    width={150}
                    height={150}
                />
            ),
        },
    ];

    useEffect(() => {
        console.log(carousel.current.scrollWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <motion.div
            className="carousel"
            ref={carousel}
            whileTap={{ cursor: "grabbing" }}
        >
            <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="inner-carousel"
            >
                {cardsContent.map((cardContent, index) => {
                    return (
                        <motion.div className="item" key={index}>
                            <CardFeature
                                key={index}
                                iconComponent={cardContent.logo}
                                title={cardContent.title}
                            />
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};

export default CardSectionMobile;
