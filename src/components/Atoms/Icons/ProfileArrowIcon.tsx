import {ChevronDownIcon} from "@heroicons/react/24/outline";
import React from "react";

type ProfileArrowIconProps = {
  showMenu: boolean;
};

const ProfileArrowIcon = ({showMenu}: ProfileArrowIconProps) => {
  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <ChevronDownIcon
        className="w-6 h-6 text-brand-900"
        style={{
          transform: showMenu ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.5s ease-in-out",
        }}
      />
    </div>
  );
};

export default ProfileArrowIcon;
