import Image from "next/image";

export const PsychologyContent = {
    banner: (
        <Image
            className="rounded-3xl object-cover w-1/3	    
                        max-2xl:w-full max-2xl:py-5"
            src="/CHICA_SALUD.jpg"
            alt="salufy-nutri"
            width={600}
            height={500}
        />
    ),
    risk: (
        <Image
            src="/icons/RISK_PSYCHO.svg"
            alt="psycho-risk"
            width={200}
            height={100}
        />
    ),
    ratio: (
        <Image
            src="/icons/RATIO_PSYCHO.svg"
            alt="psycho-ratio"
            width={200}
            height={100}
        />
    ),
    item: (
        <Image
            src="/icons/ICON_ITEM_PSYCHO.svg"
            alt="psycho-item"
            width={25}
            height={25}
        />
    ),
};

export const NutritionContent = {
    banner: (
        <Image
            className="rounded-3xl object-cover w-1/3	    
                        max-2xl:w-full max-2xl:py-5"
            src="/COMIDA_SALUD.jpg"
            alt="salufy-nutri"
            width={600}
            height={500}
        />
    ),
    risk: (
        <Image
            src="/icons/RISK_NUTRI.svg"
            alt="nutri-risk"
            width={200}
            height={100}
        />
    ),
    ratio: (
        <Image
            src="/icons/RATIO_NUTRI.svg"
            alt="nutri-ratio"
            width={200}
            height={100}
        />
    ),
    item: (
        <Image
            src="/icons/ICON_ITEM_NUTRI.svg"
            alt="nutri-item"
            width={25}
            height={25}
        />
    ),
};
