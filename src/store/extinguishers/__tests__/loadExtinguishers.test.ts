import { getExtinguishersMock } from "../../../mocks/factories/extinguisherFactory/extinguisherFactory";
import { ExtinguisherStructure } from "../../../types";
import {
  extinguishersReducer,
  loadExtinguishersActionCreator,
} from "../extinguishersSlice";

describe("Given a loadExtinguishers reducer", () => {
  describe("When it receives an empty initialExtinguishersState and an array of extinguishers as payload", () => {
    test("Then it should return a new state with the array of extinguishers", () => {
      const initialExtinguishersState: ExtinguisherStructure[] = [];

      const newExtinguishersList: ExtinguisherStructure[] =
        getExtinguishersMock(3);

      const loadExtinguishersAction =
        loadExtinguishersActionCreator(newExtinguishersList);

      const newExtinguishersState = extinguishersReducer(
        {
          extinguishers: initialExtinguishersState,
          loadNumber: 1,
          numberOfExtinguishersAtDb: 3,
          classFilter: "",
          selectedExtinguisher: {} as ExtinguisherStructure,
          updatingExtinguisher: {} as ExtinguisherStructure,
        },
        loadExtinguishersAction
      );

      expect(newExtinguishersState.extinguishers).toStrictEqual(
        newExtinguishersList
      );
    });
  });
});
