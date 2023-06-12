import { ExtinguisherStructure } from "../../../types";
import {
  changeClassFilterActionCreator,
  extinguishersReducer,
} from "../extinguishersSlice";
import { ExtinguishersStateStructure } from "../types";

describe("Given a changeClassFilter reducer", () => {
  describe("When it receives a K class", () => {
    test("Then it should return a new state with classFilter 'K'", () => {
      const initialExtinguishersState: ExtinguishersStateStructure = {
        extinguishers: [],
        loadNumber: 1,
        numberOfExtinguishersAtDb: 11,
        classFilter: "",
        selectedExtinguisher: {} as ExtinguisherStructure,
      };

      const expectedExtinguishersState: ExtinguishersStateStructure = {
        extinguishers: [],
        loadNumber: 1,
        numberOfExtinguishersAtDb: 11,
        classFilter: "K",
        selectedExtinguisher: {} as ExtinguisherStructure,
      };

      const selectedClass = "K";

      const changeClassFilterAction =
        changeClassFilterActionCreator(selectedClass);

      const newExtinguishersState = extinguishersReducer(
        initialExtinguishersState,
        changeClassFilterAction
      );

      expect(newExtinguishersState).toStrictEqual(expectedExtinguishersState);
    });
  });
});
