import Link from "next/link";

type NavigationButtonProps = {
  to: string;
  children: React.ReactNode;
};

const NavigationButton = ({ to, children }: NavigationButtonProps) => {
  return (
    <Link
      href={to}
      className="text-gray-600 hover:text-gray-900 flex items-center transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

export default NavigationButton;
