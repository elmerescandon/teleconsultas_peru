import Link from "next/link";
import React from "react";

type LinkPrimaryProps = {
  children: React.ReactNode;
  to: string;
};

const LinkPrimary = ({ children, to }: LinkPrimaryProps) => {
  return (
    <Link
      href={to}
      className="text-basic-white bg-brand-600 rounded-lg p-2 text-sm font-normal max-h-9"
    >
      {children}
    </Link>
  );
};

export default LinkPrimary;
