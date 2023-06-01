import jwtDecode from "jwt-decode";
import { TokenDataStructure, UserTokenStructure } from "../../store/user/types";
import { useCallback } from "react";

const useToken = () => {
  const decodeToken = useCallback((token: string) => {
    const tokenData: TokenDataStructure = jwtDecode(token);

    const userData: UserTokenStructure = {
      id: tokenData.sub,
      name: tokenData.name,
    };

    return userData;
  }, []);

  return { decodeToken };
};

export default useToken;
