import NavigationButton from '@/components/atoms/NavigationButton/NavigationButton';
import React from 'react';


const NavigationBar = () => {
  return (
    <nav className="h-full justify-center flex w ">
      <NavigationButton to="/about">Pacientes</NavigationButton>
      <NavigationButton to="/services">Profesionales</NavigationButton>
      <NavigationButton to="/contact">Especialistas</NavigationButton>
    </nav>
  );
};

export default NavigationBar;