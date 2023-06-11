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
import { ExtinguisherData } from "../../types";

const apiUrl = import.meta.env.VITE_API_URL;

const useExtinguishers = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.userState);
  const { loadNumber, classFilter } = useAppSelector(
    (state) => state.extinguishersState
  );

  interface GetApiResponse {
    extinguishers: ExtinguisherStructure[];
    numberOfExtinguishers: number;
  }

  const getExtinguishers = useCallback(async (): Promise<
    GetApiResponse | undefined
  > => {
    dispatch(showLoadingActionCreator());

    try {
      const {
        data: { extinguishers, numberOfExtinguishers },
      } = await axios.get<{
        extinguishers: ExtinguisherStructure[];
        numberOfExtinguishers: number;
      }>(
        `${apiUrl}${paths.extinguishers}?loadNumber=${loadNumber}&filter=${classFilter}`
      );

      dispatch(hideLoadingActionCreator());

      return { extinguishers, numberOfExtinguishers };
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(showModalActionCreator(modals.getItemsError));
    }
  }, [classFilter, dispatch, loadNumber]);

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

  const createExtinguisher = async (extinguisher: ExtinguisherData) => {
    dispatch(showLoadingActionCreator());

    try {
      const {
        data: { extinguisher: newExtinguisher },
      } = await axios.post<{ extinguisher: ExtinguisherStructure }>(
        `${apiUrl}${paths.extinguishers}`,
        { extinguisher },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(hideLoadingActionCreator());

      dispatch(showModalActionCreator(modals.createItemSuccess));

      return newExtinguisher;
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(showModalActionCreator(modals.createItemError));
    }
  };

  return { getExtinguishers, deleteExtinguisher, createExtinguisher };
};

export default useExtinguishers;
