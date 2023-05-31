import axios from "axios";
import { UserStructure } from "../../types";
import paths from "../../router/paths";
import { useCallback } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const getToken = useCallback(
    async (userCredentials: UserStructure): Promise<string> => {
      try {
        const {
          data: { token },
        } = await axios.post<{ token: string }>(
          `${apiUrl}${paths.user}${paths.login}`,
          userCredentials
        );

        return token;
      } catch (error) {
        throw error as Error;
      }
    },
    []
  );

  return { getToken };
};

export default useUser;
