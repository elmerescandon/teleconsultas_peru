import "./NavigationButton.scss";
import Link from "next/link";

type NavigationButtonProps = {
  to: string;
  children: React.ReactNode;
};

const NavigationButton = ({ to, children }: NavigationButtonProps) => {
  return (
    <Link href={to}>
      <div className="navigation-button m-0 text-black-100 hover:text-blue-900 flex items-center justify-center  transition-colors duration-300 h-24 w-28 px-2 ">
        {children}
      </div>
    </Link>
  );
};

export default NavigationButton;
