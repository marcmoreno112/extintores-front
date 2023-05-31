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

  const removeFromLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  return { addToLocalStorage, getFromLocalStorage, removeFromLocalStorage };
};

export default useLocalStorage;
