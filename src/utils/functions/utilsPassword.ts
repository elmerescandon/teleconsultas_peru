export const generateLostPasswordCode = () => {
    const code = Math.floor(Math.random() * 1000000);
    return code;
};
