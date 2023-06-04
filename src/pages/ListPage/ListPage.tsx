import { getExtinguishersMock } from "../../mocks/factories/extinguisherFactory/extinguisherFactory";
import { useAppDispatch } from "../../store";
import { loadExtinguishersActionCreator } from "../../store/extinguishers/extinguishersSlice";
import ListPageStyled from "./ListPageStyled";

const ListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const extinguishersMockList = getExtinguishersMock(3);

  dispatch(loadExtinguishersActionCreator(extinguishersMockList));

  return (
    <ListPageStyled>
      <h2 className="page-title">Extintores</h2>
    </ListPageStyled>
  );
};

export default ListPage;
