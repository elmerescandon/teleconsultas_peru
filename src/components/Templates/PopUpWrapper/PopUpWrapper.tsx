import React from "react";

type PopUpWrapperProps = {
  children: React.ReactNode;
};

const PopUpWrapper = ({children}: PopUpWrapperProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white p-10 rounded-3xl flex flex-col gap-5 h-3/4 w-1/2 overflow-auto
                        max-2xl:px-10
                        max-lg:w-10/12"
      >
        {children}
      </div>
    </div>
  );
};

export default PopUpWrapper;
