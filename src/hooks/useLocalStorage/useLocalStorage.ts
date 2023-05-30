const useLocalStorage = () => {
  const addToLocalStorage = (
    localStorageKey: string,
    localStorageValue: string
  ) => {
    localStorage.setItem(localStorageKey, localStorageValue);
  };

  return { addToLocalStorage };
};

export default useLocalStorage;
