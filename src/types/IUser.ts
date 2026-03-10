export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

export interface IUserRegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IUserLoginRequest {
  email: string;
  password: string;
}

export interface IUserLoginResponse {
  accessToken: string;
  user: Omit<IUser, "token">;
}
