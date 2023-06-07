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
      const extinguishers = await getExtinguishers();

      if (!extinguishers) {
        return;
      }

      dispatch(loadExtinguishersActionCreator(extinguishers));

      const firstExtinguishersUrl = extinguishers[0].img;

      const preconnectElement = await document.createElement("link");
      preconnectElement.rel = "preload";
      preconnectElement.as = "image";
      preconnectElement.href = firstExtinguishersUrl;

      const parent = document.head;
      const firstChild = document.head.firstChild;
      parent.insertBefore(preconnectElement, firstChild);
    })();
  }, [dispatch, getExtinguishers]);

  return (
    <ListPageStyled>
      <h2 className="page-title">Extintores</h2>
      <ExtinguishersList extinguishers={extinguishers.extinguishers} />
    </ListPageStyled>
  );
};

export default ListPage;
