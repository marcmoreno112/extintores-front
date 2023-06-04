import axios from "axios";
import { ExtinguisherStructure } from "../../types";
import paths from "../../router/paths";
import { useCallback } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

const useExtinguishers = () => {
  const getExtinguishers = useCallback(async (): Promise<
    ExtinguisherStructure[]
  > => {
    try {
      const {
        data: { extinguishers },
      } = await axios.get<{ extinguishers: ExtinguisherStructure[] }>(
        `${apiUrl}${paths.extintores}`
      );

      return extinguishers;
    } catch {
      throw new Error("Database problem");
    }
  }, []);

  return { getExtinguishers };
};

export default useExtinguishers;
