import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold text-gray-800 hover:text-gray-900 px-2"
    >
      MediConnect
    </Link>
  );
};

export default Logo;
