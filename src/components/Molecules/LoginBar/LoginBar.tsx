import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import Routes from "@/utils/routes/Routes";
import React from "react";

const LoginBar = () => {
  return (
    <div className="login-bar flex flex-row items-center gap-7">
      <LinkPrimary to={Routes.LOGIN}>{"Iniciar Sesión"}</LinkPrimary>
      <LinkPrimary to={Routes.REGISTER}>{"Regístrate"}</LinkPrimary>
    </div>
  );
};

export default LoginBar;
