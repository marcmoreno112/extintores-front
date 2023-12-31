import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch, useAppSelector } from "../../store";
import { UserTokenStructure } from "../../store/user/types";
import { loginUserActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";
import Modal from "../Modal/Modal";
import { hideModalActionCreator } from "../../store/ui/uiSlice";
import Loader from "../Loader/Loader";

const App = (): React.ReactElement => {
  const { getFromLocalStorage } = useLocalStorage();

  const { decodeToken } = useToken();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { hasModal, modal, isLoading } = useAppSelector(
    (state) => state.uiState
  );

  useEffect(() => {
    const token = getFromLocalStorage("token");

    if (token) {
      const userData: UserTokenStructure = decodeToken(token);

      dispatch(loginUserActionCreator({ ...userData, token }));
    }
  }, [decodeToken, dispatch, getFromLocalStorage, navigate]);

  const hideModal = () => dispatch(hideModalActionCreator());

  return (
    <>
      {isLoading && <Loader />}
      {hasModal && <Modal action={hideModal} modal={modal} />}

      <Layout />
    </>
  );
};

export default App;
