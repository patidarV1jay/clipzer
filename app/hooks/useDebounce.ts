import { useState } from 'react';

const useDebounce = (interval: number, hideIcon: () => void) => {
  const [intervalTime, setIntervalTime] =
    useState<ReturnType<typeof setTimeout>>(null);

  const debounce = () => {
    return function () {
      if (intervalTime) {
        clearTimeout(intervalTime);
        setIntervalTime(null);
      }
      setIntervalTime(
        (() => {
          return setTimeout(hideIcon, interval);
        })(),
      );
    };
  };

  return debounce();
};

export default useDebounce;
