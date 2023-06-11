import {
  extinguishersReducer,
  loadMoreExtinguishersActionCreator,
} from "../extinguishersSlice";
import { ExtinguishersStateStructure } from "../types";

describe("Given a loadMoreExtinguishers reducer", () => {
  describe("When it receives an initialExtinguishersState", () => {
    test("Then it should return a new state with the loadNumber property increased by 1", () => {
      const initialExtinguishersState: ExtinguishersStateStructure = {
        extinguishers: [],
        loadNumber: 1,
        numberOfExtinguishersAtDb: 11,
        classFilter: "",
      };

      const expectedExtinguishersState: ExtinguishersStateStructure = {
        extinguishers: [],
        loadNumber: 2,
        numberOfExtinguishersAtDb: 11,
        classFilter: "",
      };

      const loadMoreExtinguishersAction = loadMoreExtinguishersActionCreator();

      const newExtinguishersState = extinguishersReducer(
        initialExtinguishersState,
        loadMoreExtinguishersAction
      );

      expect(newExtinguishersState).toStrictEqual(expectedExtinguishersState);
    });
  });
});
