import { getExtinguishersMock } from "../../../mocks/factories/extinguisherFactory/extinguisherFactory";
import { ExtinguisherStructure } from "../../../types";
import {
  deleteExtinguisherActionCreator,
  extinguishersReducer,
} from "../extinguishersSlice";

describe("Given a deleteExtinguisher reducer", () => {
  describe("When it receives a list of extinguishers and an id", () => {
    test("Then it should return a list of extinguishers without the one with the id", () => {
      const initialExtinguishersList = getExtinguishersMock(4);
      const idToDelete = initialExtinguishersList[0].id;

      const deleteExtinguisherAction =
        deleteExtinguisherActionCreator(idToDelete);

      const newExtinguishersState = extinguishersReducer(
        {
          extinguishers: initialExtinguishersList,
          loadNumber: 1,
          numberOfExtinguishersAtDb: 3,
          classFilter: "",
          selectedExtinguisher: {} as ExtinguisherStructure,
        },
        deleteExtinguisherAction
      );

      const expectedExtinguishersList = initialExtinguishersList.filter(
        (extinguisher) => extinguisher.id !== idToDelete
      );

      expect(newExtinguishersState.extinguishers).toStrictEqual(
        expectedExtinguishersList
      );
    });
  });
});
