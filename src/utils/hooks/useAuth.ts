import { useState } from 'react';

const useUserValidation = () => {
  const isUsernameValid = (username: string): boolean => {
    const minLength = 4;
    const maxLength = 20;
    const validCharacters = /^[a-zA-Z0-9_]+$/;
    
    return (
      username.length >= minLength &&
      username.length <= maxLength &&
      validCharacters.test(username)
    );
  };

  const isPasswordValid = (password: string): boolean => {
    // Add your password validation logic here
    // For example, requiring a minimum length or specific character types
    const minLength = 8;
    return password.length >= minLength;
  };

  const isUsernameAvailable = async (username: string): Promise<boolean> => {
    return new Promise(resolve => {
      setTimeout(() => {
        const fakeDatabase = ['raul.escandon', 'kurt.neumann', 'alejandro.holder', 'alonso.laynes'];
        const isAvailable = fakeDatabase.includes(username);
        resolve(isAvailable);
      }, 1000);
    });
  };

  const validateUser = async (username: string, password: string): Promise<void> => {
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
    
    if (!isUsernameAvailable(trimmedUsername)) {
      throw new Error('Invalid username. Please use only letters, numbers, and underscores, between 4 and 20 characters.');
    }

    if (!isPasswordValid(trimmedPassword)) {
      throw new Error('Invalid password. Password must be at least 8 characters.');
    }
  };

  return { validateUser };
};

export default useUserValidation;