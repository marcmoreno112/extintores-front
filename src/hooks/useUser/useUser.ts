import axios from "axios";
import { UserStructure } from "../../types";
import paths from "../../utils/paths";
import { useCallback } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const getToken = useCallback(
    async (userCredentials: UserStructure): Promise<string> => {
      const {
        data: { token },
      } = await axios.post(
        `${apiUrl}${paths.user}${paths.login}`,
        userCredentials
      );

      return token;
    },
    []
  );

  return { getToken };
};

export default useUser;
