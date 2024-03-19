import React from "react";
import Loading from "../Loaders/Loading/Loading";
import {dateToSpanish} from "@/utils/functions/utilsDate";

type PopUpDayHeadlineProps = {
  date: Date;
  loading: boolean;
};

const PopUpDayHeadline = ({date, loading}: PopUpDayHeadlineProps) => {
  return (
    <div className="flex gap-1 items-center">
      <p className="text-xl font-semibold max-lg:text-lg">
        {dateToSpanish(date)}
      </p>
      {loading && <Loading size={5} />}
    </div>
  );
};

export default PopUpDayHeadline;
