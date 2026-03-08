export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  token: string;
  refreshToken?: string;
}

export interface IUserRegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
