export interface IuserModel {
  name: string;
  surname: string;
  email: string;
  password: string;
  is_blocked: boolean;
}

export interface IUserRegisterModel {
  name: string;
  surname: string;
  email: string;
  password: string;
  is_blocked: boolean;

}
export interface IUserLoginModel {
  email: string;
  password: string;
}
