import Image from "next/image";
import React from "react";

type CardCommentProps = {
    name: string;
    comment: string;
    imagePath: string;
};

const CardComment = ({ name, comment, imagePath }: CardCommentProps) => {
    return (
        <div className="flex flex-col items-center  gap-7 bg-brand-50 w-80 px-6 rounded-3xl py-10">
            <Image
                width="200"
                height="200"
                src={imagePath}
                alt={`${name}-alt`}
                className="rounded-full h-36 w-36"
            />
            <div className="flex flex-col justify-center items-center gap-3">
                <div className="text-3xl font-semibold text-center">{name}</div>
                <div className="font-normal text-lg text-center text-neutral-700 w-52">
                    {comment}
                </div>
            </div>
        </div>
    );
};

export default CardComment;
