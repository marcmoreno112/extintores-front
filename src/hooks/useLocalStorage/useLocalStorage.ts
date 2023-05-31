const useLocalStorage = () => {
  const addToLocalStorage = (
    localStorageKey: string,
    localStorageValue: string
  ) => {
    localStorage.setItem(localStorageKey, localStorageValue);
  };

  const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem("token") as string;

    return token;
  };

  return { addToLocalStorage, getTokenFromLocalStorage };
};

export default useLocalStorage;
