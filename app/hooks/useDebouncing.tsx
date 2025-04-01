import React, { useEffect, useState } from "react";

const useDebouncing = (value:string, delay:number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const debounceId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(debounceId);
  }, [value, delay]);
  return debounceValue;
};

export default useDebouncing;
