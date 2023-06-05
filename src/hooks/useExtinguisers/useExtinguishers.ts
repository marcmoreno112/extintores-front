import axios from "axios";
import { ExtinguisherStructure } from "../../types";
import paths from "../../router/paths";
import { useCallback } from "react";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useExtinguishers = () => {
  const dispatch = useAppDispatch();

  const getExtinguishers = useCallback(async (): Promise<
    ExtinguisherStructure[]
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
      throw new Error("Database problem");
    }
  }, [dispatch]);

  return { getExtinguishers };
};

export default useExtinguishers;
