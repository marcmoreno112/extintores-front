import axios from "axios";
import { UserStructure } from "../../types";
import paths from "../../router/paths";
import { useCallback } from "react";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../store/ui/uiSlice";
import modalErrors from "../../components/Modal/modalErrors";

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(
    async (userCredentials: UserStructure): Promise<string | undefined> => {
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
        dispatch(hideLoadingActionCreator());

        dispatch(showModalActionCreator(modalErrors.wrongCredentials));
      }
    },
    [dispatch]
  );

  return { getToken };
};

export default useUser;
