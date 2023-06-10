import {
  getExtinguisherMock,
  getExtinguishersMock,
} from "../../../mocks/factories/extinguisherFactory/extinguisherFactory";
import { ExtinguisherStructure } from "../../../types";
import {
  createExtinguisherActionCreator,
  extinguishersReducer,
} from "../extinguishersSlice";
import { ExtinguishersStateStructure } from "../types";

describe("Given a createExtinguisher reducer", () => {
  describe("When it receives an extinguisher", () => {
    test("Then it should return a new state with the extinguisher at the last position", () => {
      const initialExtinguishers: ExtinguisherStructure[] =
        getExtinguishersMock(2);

      const initialExtinguishersState: ExtinguishersStateStructure = {
        extinguishers: initialExtinguishers,
        loadNumber: 1,
      };

      const newExtinguisher: ExtinguisherStructure = getExtinguisherMock();

      const createExtinguisherAction =
        createExtinguisherActionCreator(newExtinguisher);

      const newExtinguishersState = extinguishersReducer(
        initialExtinguishersState,
        createExtinguisherAction
      );

      const expectedExtinguisherState: ExtinguishersStateStructure = {
        ...initialExtinguishersState,
        extinguishers: [
          ...initialExtinguishersState.extinguishers,
          newExtinguisher,
        ],
      };

      expect(newExtinguishersState).toStrictEqual(expectedExtinguisherState);
    });
  });
});
