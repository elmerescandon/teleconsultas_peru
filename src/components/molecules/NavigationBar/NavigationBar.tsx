import NavigationButton from "@/components/atoms/NavigationButton/NavigationButton";
import React from "react";

const NavigationBar = () => {
  return (
    <nav className="h-full justify-center flex w ">
      <NavigationButton to="/patients">Patients</NavigationButton>
      <NavigationButton to="/doctors">Doctors</NavigationButton>
      <NavigationButton to="/specialists">Specialists</NavigationButton>
    </nav>
  );
};

export default NavigationBar;
