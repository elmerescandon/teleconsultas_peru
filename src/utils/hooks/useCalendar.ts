import React, { useState } from 'react';

interface MonthYearChangerHook {
  month: number;
  year: number;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
}

const useMonthYearChange = (initialMonth: number, initialYear: number): MonthYearChangerHook => {
  const [month, setMonth] = useState(initialMonth);
  const [year, setYear] = useState(initialYear);

  const goToPreviousMonth = (): void => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const goToNextMonth = (): void => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return {
    month,
    year,
    goToPreviousMonth,
    goToNextMonth,
  } as const;
};

export default useMonthYearChange;