import {IuserModel} from './userModel';

export interface IHouseModel {
  id: number;
  city: string;
  street: string;
  price: number;
  owner: IuserModel;
}

export interface IHouseRegisterModel {
  id: number;
  city: string;
  street: string;
  price: number;
  owner: IuserModel;

}
