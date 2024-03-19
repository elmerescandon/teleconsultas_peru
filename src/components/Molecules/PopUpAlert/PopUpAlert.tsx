import {ExclamationCircleIcon} from "@heroicons/react/24/outline";
import React from "react";

type PopUpAlertProps = {
  text: string;
};

const PopUpAlert = ({text}: PopUpAlertProps) => {
  return (
    <div className="flex items-center justify-center gap-4 bg-neutral-100 w-full">
      <div className="bg-neutral-500 w-2 h-full"></div>
      <div className="w-full flex justify-start items-center py-4 gap-x-4">
        <ExclamationCircleIcon className="w-10 h-10 text-neutral-700" />
        <p className="text-neutral-700 font-medium text-center">{text}</p>
      </div>
    </div>
  );
};

export default PopUpAlert;
