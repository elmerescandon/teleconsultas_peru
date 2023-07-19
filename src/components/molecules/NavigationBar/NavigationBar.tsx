import NavigationButton from '@/components/atoms/NavigationButton/NavigationButton';
import React from 'react';


const NavigationBar = () => {
  return (
    <nav className="space-x-4">
      <NavigationButton to="/about">About</NavigationButton>
      <NavigationButton to="/services">Services</NavigationButton>
      <NavigationButton to="/contact">Contact</NavigationButton>
    </nav>
  );
};

export default NavigationBar;