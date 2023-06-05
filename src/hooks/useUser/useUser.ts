import axios from "axios";
import { UserStructure } from "../../types";
import paths from "../../router/paths";
import { useCallback } from "react";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(
    async (userCredentials: UserStructure): Promise<string> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { token },
        } = await axios.post<{ token: string }>(
          `${apiUrl}${paths.user}${paths.login}`,
          userCredentials
        );

        dispatch(hideLoadingActionCreator());

        return token;
      } catch {
        throw new Error("Wrong credentials");
      }
    },
    [dispatch]
  );

  return { getToken };
};

export default useUser;
