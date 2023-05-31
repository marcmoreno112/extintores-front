import jwtDecode from "jwt-decode";
import { TokenDataStructure } from "../../store/user/types";
import { useCallback } from "react";

const useToken = () => {
  const decodeToken = useCallback((token: string) => {
    const tokenData: TokenDataStructure = jwtDecode(token);

    const userData = {
      id: tokenData.sub,
      name: tokenData.name,
      token: token,
    };

    return userData;
  }, []);

  return { decodeToken };
};

export default useToken;
