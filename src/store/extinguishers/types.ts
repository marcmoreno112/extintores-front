import { ExtinguisherStructure } from "../../types";

export interface ExtinguishersStateStructure {
  extinguishers: ExtinguisherStructure[];
  loadNumber: number;
  numberOfExtinguishersAtDb: number;
  classFilter: string;
  selectedExtinguisher: ExtinguisherStructure;
  updatingExtinguisher: ExtinguisherStructure;
}
