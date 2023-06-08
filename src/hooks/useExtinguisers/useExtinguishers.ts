import axios from "axios";
import { ExtinguisherStructure } from "../../types";
import paths from "../../router/paths";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../store/ui/uiSlice";
import modals from "../../components/Modal/modals";

const apiUrl = import.meta.env.VITE_API_URL;

const useExtinguishers = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.userState);

  const getExtinguishers = useCallback(async (): Promise<
    ExtinguisherStructure[] | undefined
  > => {
    dispatch(showLoadingActionCreator());

    try {
      const {
        data: { extinguishers },
      } = await axios.get<{ extinguishers: ExtinguisherStructure[] }>(
        `${apiUrl}${paths.extinguishers}`
      );

      dispatch(hideLoadingActionCreator());

      return extinguishers;
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(showModalActionCreator(modals.getItemsError));
    }
  }, [dispatch]);

  const deleteExtinguisher = async (id: string): Promise<void> => {
    dispatch(showLoadingActionCreator());

    try {
      await axios.delete(`${apiUrl}${paths.extinguishers}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(hideLoadingActionCreator());

      dispatch(showModalActionCreator(modals.deleteItemSuccess));
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(showModalActionCreator(modals.deleteItemError));
    }
  };

  return { getExtinguishers, deleteExtinguisher };
};

export default useExtinguishers;
