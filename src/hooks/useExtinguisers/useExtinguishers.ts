import axios from "axios";
import { ExtinguisherStructure } from "../../types";
import paths from "../../router/paths";

const apiUrl = import.meta.env.VITE_API_URL;

const useExtinguishers = () => {
  const getExtinguishers = async (): Promise<ExtinguisherStructure[]> => {
    const {
      data: { extinguishers },
    } = await axios.get<{ extinguishers: ExtinguisherStructure[] }>(
      `${apiUrl}${paths.extintores}`
    );

    return extinguishers;
  };

  return { getExtinguishers };
};

export default useExtinguishers;
