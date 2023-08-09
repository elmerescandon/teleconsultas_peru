import FacebookIcon from "@/components/Atoms/Icons/FacebookIcon";
import GoogleIcon from "@/components/Atoms/Icons/GoogleIcon";
import InstagramIcon from "@/components/Atoms/Icons/InstagramIcon";
import YoutubeIcon from "@/components/Atoms/Icons/YoutubeIcon";
import LinkIcon from "@/components/Atoms/Links/LinkIcon/LinkIcon";
import LinkSecondary2 from "@/components/Atoms/Links/LinkSecondary/LinkSecondary2";
import Routes from "@/utils/routes/Routes";
import React from "react";

const Footer = () => {
  return (
    <div className="footer flex flex-row justify-between bg-brand-700 px-48 py-14">
      <div className="footer-section footer-section__1 flex flex-col gap-2">
        <LinkSecondary2 to={Routes.HOME}>Inicio </LinkSecondary2>
        <LinkSecondary2 to={Routes.ABOUT_US}>Nuestra Empresa</LinkSecondary2>
        <LinkSecondary2 to={Routes.FAQ}>Preguntas Frecuentes</LinkSecondary2>
        <LinkSecondary2 to={Routes.TERMS}>
          Términos y Condiciones
        </LinkSecondary2>
      </div>
      <div className="footer-section footer-section__2 flex flex-col gap-2">
        <LinkSecondary2 to={Routes.CONTACT_US}>
          Atención al cliente
        </LinkSecondary2>
        <LinkSecondary2 to={""}>info@aikasalud.com.pe</LinkSecondary2>
        <div className="footer-section__icons flex flex-row gap-2">
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
      <div className="footer-section footer-section__2 flex flex-col gap-2">
        <p className="text-3xl font-semibold text-basic-white">Aika Salud</p>
        <p className="text-lg font-medium text-basic-white">
          Conectando pacientes y doctores para una atención médica personalizada
          en línea.
        </p>
        <p className="text-sm font-light text-basic-white">
          © 2021 Aika Salud. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
