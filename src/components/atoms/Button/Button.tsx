"use client";
import "./Button.scss";

type ButtonProps = {
  content: string;
};

const Button = ({ content }: ButtonProps) => {
  const buttonStyles = {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#FFFFFF";
    e.currentTarget.style.color = "#000000";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#000000";
    e.currentTarget.style.color = "#FFFFFF";
  };

  return (
    <button
      className="font-bold py-4 px-8 rounded-md h-12 flex items-center justify-center"
      style={buttonStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
};

export default Button;
