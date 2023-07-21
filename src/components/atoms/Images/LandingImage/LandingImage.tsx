"use client";
import Image from "next/image";

const LandingImage = () => {
  return (
    <Image
      className="rounded-xl"
      src={"/doctors_3.jpg"}
      alt="user"
      width={900}
      height={600}
    />
  );
};

export default LandingImage;
