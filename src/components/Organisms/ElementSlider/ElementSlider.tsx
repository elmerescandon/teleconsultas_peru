"use client";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./ElementSlider.scss";

type ElementSliderProps = {
    items: React.ReactNode[];
};

const ElementSlider = ({ items }: ElementSliderProps) => {
    const [width, setWidth] = useState<number>(0);
    const carousel = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
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
                {items.map((item, index) => {
                    return (
                        <motion.div className="item" key={index}>
                            {item}
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};

export default ElementSlider;
