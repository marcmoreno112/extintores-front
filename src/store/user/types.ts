export interface UserTokenStructure {
  name: string;
  id: string;
}

export interface UserDataStructure extends UserTokenStructure {
  token: string;
}

export interface UserStateStructure extends UserDataStructure {
  isLogged: boolean;
}

export interface TokenDataStructure {
  name: string;
  sub: string;
}
