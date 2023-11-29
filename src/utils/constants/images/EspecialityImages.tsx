import Image from "next/image";

export const PsychologyContent = {
    banner: (
        <Image
            src="/PSYCHO_BANNER.png"
            alt="salufy-nutri"
            width={600}
            height={500}
            className="rounded-3xl max-2xl:hidden"
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
            src="/NUTRI_BANNER.png"
            alt="salufy-nutri"
            width={600}
            height={500}
            className="rounded-3xl  max-2xl:hidden"
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
