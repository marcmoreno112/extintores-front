import { useEffect } from "react";
import ExtinguishersList from "../../components/ExtinguishersList/ExtinguishersList";
import useExtinguishers from "../../hooks/useExtinguisers/useExtinguishers";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadExtinguishersActionCreator } from "../../store/extinguishers/extinguishersSlice";
import ListPageStyled from "./ListPageStyled";

const ListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const extinguishers = useAppSelector((state) => state.extinguishersState);

  const { getExtinguishers } = useExtinguishers();

  useEffect(() => {
    (async () => {
      try {
        const extinguishers = await getExtinguishers();
        dispatch(loadExtinguishersActionCreator(extinguishers));
      } catch {
        return;
      }
    })();
  }, [dispatch, getExtinguishers]);

  return (
    <ListPageStyled>
      <h2 className="page-title">Extintores</h2>
      <ExtinguishersList extinguishers={extinguishers} />
    </ListPageStyled>
  );
};

export default ListPage;
