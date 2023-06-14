import { extinguishersMock } from "../../../mocks/extinguishersMocks";
import { ExtinguisherStructure } from "../../../types";
import {
  extinguishersReducer,
  loadSelectedExtinguisherActionCreator,
} from "../extinguishersSlice";
import { ExtinguishersStateStructure } from "../types";

describe("Given a loadSelectedExtinguisher reducer", () => {
  describe("When it receives an extinguisher", () => {
    test("Then it should return a new state with the extinguisher", () => {
      const initialExtinguishersState: ExtinguishersStateStructure = {
        classFilter: "A",
        extinguishers: [],
        loadNumber: 1,
        numberOfExtinguishersAtDb: 5,
        selectedExtinguisher: {} as ExtinguisherStructure,
        updatingExtinguisher: {} as ExtinguisherStructure,
      };

      const newSelectedExtinguisher: ExtinguisherStructure =
        extinguishersMock[0];

      const loadSelectedExtinguisherAction =
        loadSelectedExtinguisherActionCreator(newSelectedExtinguisher);

      const newExtinguishersState: ExtinguishersStateStructure =
        extinguishersReducer(
          initialExtinguishersState,
          loadSelectedExtinguisherAction
        );

      const expectedExtinguishersState: ExtinguishersStateStructure = {
        ...initialExtinguishersState,
        selectedExtinguisher: newSelectedExtinguisher,
      };

      expect(newExtinguishersState).toStrictEqual(expectedExtinguishersState);
    });
  });
});
