import { UserStateStructure } from "../store/user/types";
import { UserStructure } from "../types";

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkFkbWluIn0.W3ta2i8hlz6Or2Iuv7_VwOPWBYYc2IeD-pQ_Y81n764";

export const userCredentialsMock: UserStructure = {
  username: "Juan",
  password: "hk1iiofAA!23",
};

export const userStateLoggedMock: UserStateStructure = {
  id: "",
  isLogged: true,
  name: "",
  token: "",
};
