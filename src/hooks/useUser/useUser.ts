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
      } catch {
        throw new Error("Wrong credentials");
      }
    },
    []
  );

  return { getToken };
};

export default useUser;
