import LoggedWrapper from "@/components/Wrappers/LoggedWrapper";
import React from "react";

type MainUsersLayoutProps = {
  children: React.ReactNode;
};

const MainUserLayout = ({children}: MainUsersLayoutProps) => {
  return <LoggedWrapper>{children}</LoggedWrapper>;
};

export default MainUserLayout;
