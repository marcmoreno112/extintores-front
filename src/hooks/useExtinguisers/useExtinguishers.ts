import axios from "axios";
import { ExtinguisherStructure } from "../../types";
import paths from "../../router/paths";
import { useCallback } from "react";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../store/ui/uiSlice";
import modals from "../../components/Modal/modals";

const apiUrl = import.meta.env.VITE_API_URL;

const useExtinguishers = () => {
  const dispatch = useAppDispatch();

  const getExtinguishers = useCallback(async (): Promise<
    ExtinguisherStructure[] | undefined
  > => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { extinguishers },
      } = await axios.get<{ extinguishers: ExtinguisherStructure[] }>(
        `${apiUrl}${paths.extintores}`
      );

      dispatch(hideLoadingActionCreator());

      return extinguishers;
    } catch {
      dispatch(hideLoadingActionCreator());
      dispatch(showModalActionCreator(modals.getItemsError));
    }
  }, [dispatch]);

  return { getExtinguishers };
};

export default useExtinguishers;
