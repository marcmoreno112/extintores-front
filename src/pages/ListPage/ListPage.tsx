import { useEffect } from "react";
import ExtinguishersList from "../../components/ExtinguishersList/ExtinguishersList";
import useExtinguishers from "../../hooks/useExtinguishers/useExtinguishers";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  loadExtinguishersActionCreator,
  updateNumberOfExtinguishersActionCreator,
} from "../../store/extinguishers/extinguishersSlice";
import ListPageStyled from "./ListPageStyled";
import Filter from "../../components/Filter/Filter";
import NoExtinguishers from "../../components/NoExtinguishersComponent/NoExtinguishers";

const ListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const extinguishers = useAppSelector((state) => state.extinguishersState);
  const { getExtinguishers } = useExtinguishers();

  const isEmpty = extinguishers.numberOfExtinguishersAtDb === 0;

  useEffect(() => {
    (async () => {
      const extinguishers = await getExtinguishers();

      if (!extinguishers) {
        return;
      }

      const updateNumberOfExtinguishersAction =
        updateNumberOfExtinguishersActionCreator(
          extinguishers.numberOfExtinguishers
        );

      dispatch(updateNumberOfExtinguishersAction);

      dispatch(loadExtinguishersActionCreator(extinguishers.extinguishers));

      if (extinguishers.extinguishers[0]) {
        const firstExtinguishersUrl = extinguishers.extinguishers[0].img;

        const preloadedElement = document.createElement("link");
        preloadedElement.rel = "preload";
        preloadedElement.as = "image";
        preloadedElement.href = firstExtinguishersUrl;

        const parent = document.head;

        const selectedChild = document.getElementsByName("description")[0];

        parent.insertBefore(preloadedElement, selectedChild);
      }
    })();
  }, [dispatch, getExtinguishers]);

  return (
    <ListPageStyled>
      <Filter />
      <h2 className="page-title">Extintores</h2>
      <ExtinguishersList extinguishers={extinguishers.extinguishers} />
      {isEmpty && <NoExtinguishers />}
    </ListPageStyled>
  );
};

export default ListPage;
