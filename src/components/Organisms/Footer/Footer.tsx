import FacebookIcon from "@/components/Atoms/Icons/FacebookIcon";
import GoogleIcon from "@/components/Atoms/Icons/GoogleIcon";
import InstagramIcon from "@/components/Atoms/Icons/InstagramIcon";
import YoutubeIcon from "@/components/Atoms/Icons/YoutubeIcon";
import LinkIcon from "@/components/Atoms/Links/LinkIcon/LinkIcon";
import LinkSecondary2 from "@/components/Atoms/Links/LinkSecondary/LinkSecondary2";
import Routes from "@/utils/routes/Routes";
import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div
            className="flex flex-row bg-salufy-blue px-48 py-14 
            max-lg:px-24 max-xl:flex-col max-xl:gap-10 max-xl:py-5"
        >
            <div
                className="flex flex-row justify-between gap-14 flex-wrap 
                            max-xl:gap-2"
            >
                <div
                    className="flex flex-col justify-between gap-1 flex-wrap
                                max-xl:justify-start"
                >
                    <LinkSecondary2 to={Routes.HOME}>Inicio </LinkSecondary2>
                    <LinkSecondary2 to={Routes.TERMS}>
                        Términos y Condiciones
                    </LinkSecondary2>
                </div>
                <div className="flex flex-col gap-1">
                    <LinkSecondary2 to={Routes.CONTACT_US}>
                        Atención al cliente
                    </LinkSecondary2>
                    <LinkSecondary2 to={""}>
                        soporte@salufyorg.com
                    </LinkSecondary2>
                    <div className="footer-section__icons flex flex-row gap-2 pt-5">
                        <LinkIcon to="">
                            <GoogleIcon size={20} />
                        </LinkIcon>
                        <LinkIcon to="">
                            <FacebookIcon size={20} />
                        </LinkIcon>
                        <LinkIcon to="">
                            <InstagramIcon size={20} />
                        </LinkIcon>
                        <LinkIcon to="">
                            <YoutubeIcon size={20} />
                        </LinkIcon>
                    </div>
                </div>
            </div>
            <div className="footer-section footer-section__2 flex flex-col gap-2 px-14 max-lg:px-0 max-xl:items-center">
                <Image
                    src="/LOGO_SALUFY_BLANCO.png"
                    width={200}
                    height={200}
                    alt="logo-salufy-white"
                    className="max-xl:w-1/2 max-xl:h-1/2"
                />
                <p className="text-lg font-medium text-basic-white max-lg:text-base">
                    Salud a un click de distancia.
                </p>
                <p className="text-sm font-light text-basic-white">
                    © 2023 Salufy. Todos los derechos reservados.
                </p>
            </div>
        </div>
    );
};

export default Footer;
