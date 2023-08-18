"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

type CarrouselProps = {
    items: React.ReactNode[];
};

const Carrousel = ({ items }: CarrouselProps) => {
    const [currentItem, setCurrentItem] = React.useState(0);
    return (
        <div className="flex items-center gap-10 justify-center flex-col">
            <div className="flex justify-center gap-24">
                {items[currentItem]}
            </div>

            <div className="flex gap-10">
                <button
                    className="w-20 h-20 rounded-full bg-brand-50 flex items-center justify-center"
                    onClick={() => {
                        setCurrentItem(
                            currentItem === 0
                                ? items.length - 1
                                : currentItem - 1
                        );
                    }}
                >
                    <ArrowLeftIcon className="w-10 h-10 text-brand-900" />
                </button>
                <button
                    className="w-20 h-20 rounded-full bg-brand-50 flex items-center justify-center"
                    onClick={() => {
                        setCurrentItem(
                            currentItem === items.length - 1
                                ? 0
                                : currentItem + 1
                        );
                    }}
                >
                    <ArrowRightIcon className="w-10 h-10 text-brand-900" />
                </button>
            </div>
        </div>
    );
};

export default Carrousel;
