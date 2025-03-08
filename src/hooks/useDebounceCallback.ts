import { useEffect, useRef } from "react";

const useDebounceCallback = <T>(
  value: T,
  callback: (debouncedValue: T) => void,
  delay: number = 500,
) => {
  const initialValueRef = useRef(value);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    if (initialValueRef.current !== value) {
      timeout = setTimeout(() => {
        callback(value);
      }, delay);
      initialValueRef.current = value;
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [value, delay, callback]);
};

export default useDebounceCallback;
