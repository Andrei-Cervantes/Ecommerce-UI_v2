export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  token: string;
  refreshToken?: string;
}
