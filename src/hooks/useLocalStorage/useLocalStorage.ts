import { useCallback } from "react";

const useLocalStorage = () => {
  const addToLocalStorage = (
    localStorageKey: string,
    localStorageValue: string
  ) => {
    localStorage.setItem(localStorageKey, localStorageValue);
  };

  const getFromLocalStorage = useCallback((key: string) => {
    const token = localStorage.getItem(key);
    return token;
  }, []);

  return { addToLocalStorage, getFromLocalStorage: getFromLocalStorage };
};

export default useLocalStorage;
