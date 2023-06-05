import { useEffect } from "react";
import ExtinguishersList from "../../components/ExtinguishersList/ExtinguishersList";
import useExtinguishers from "../../hooks/useExtinguisers/useExtinguishers";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadExtinguishersActionCreator } from "../../store/extinguishers/extinguishersSlice";
import ListPageStyled from "./ListPageStyled";
import Loader from "../../components/Loader/Loader";

const ListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const extinguishers = useAppSelector((state) => state.extinguishersState);

  const { isLoading } = useAppSelector((state) => state.uiState);

  const { getExtinguishers } = useExtinguishers();

  useEffect(() => {
    (async () => {
      try {
        const extinguishers = await getExtinguishers();

        dispatch(loadExtinguishersActionCreator(extinguishers));

        const firstExtinguishersUrl = extinguishers[0].img;

        const preconnectElement = await document.createElement("link");
        preconnectElement.rel = "preconnect";
        preconnectElement.href = firstExtinguishersUrl;
        document.head.appendChild(preconnectElement);
      } catch {
        return;
      }
    })();
  }, [dispatch, getExtinguishers]);

  return (
    <ListPageStyled>
      {isLoading ? <Loader /> : ""}
      <h2 className="page-title">Extintores</h2>
      <ExtinguishersList extinguishers={extinguishers} />
    </ListPageStyled>
  );
};

export default ListPage;
