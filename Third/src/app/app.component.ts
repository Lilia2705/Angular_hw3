import {Component, Output} from '@angular/core';
import {IHouseModel, IuserModel, IHouseRegisterModel, IUserRegisterModel, IUserLoginModel} from './models';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Third';
  allInfo = false;

  isLoginClicked = false;
  isRegisterClicked = false;
  isRegisterHouseClicked = false;
  showedHouseIndex: number;
  information: string;


  @Output ()

  userToCreate: IUserRegisterModel = {
    name: '',
    surname: '',
    email: '',
    password: '',
    is_blocked: Boolean(Math.floor(Math.random() * 2))
  };

  users: IuserModel[] = [
    {
      name: 'Oleh',
      surname: 'Vasiv',
      email: 'vasiv@gmail.com',
      password: '12345',
      is_blocked: false,
    },
    {
      name: 'Ira',
      surname: 'Fomin',
      email: 'fomin@gmail.com',
      password: 'irafomin',
      is_blocked: false,
    },
    {
      name: 'Ihor',
      surname: 'Andriiv',
      email: 'ihor@mail.ru',
      password: 'password',
      is_blocked: true,
    },
  ];

  houses: IHouseModel[] = [
    {
      id: 1,
      city: 'Lviv',
      street: 'Shevchenka',
      price: 450000,
      owner: this.users[0]

    },
    {
      id: 2,
      city: 'Kyiv',
      street: 'Kotova',
      price: 28000,
      owner: this.users[1]

    },
    {
      id: 3,
      city: 'Odessa',
      street: 'Derybasivska',
      price: 100000,
      owner: this.users[2]
    }
  ];

  houseToCreate: IHouseRegisterModel = {
    id: this.users.length + 1,
    city: '',
    street: '',
    price: 0,
    owner: this.users[Math.floor(Math.random() * this.users.length)]
  };

  loginUser: IUserLoginModel = {
    email: '',
    password: '',
  };

  showFullInfo(id: number) {
    this.allInfo = !this.allInfo;
    this.showedHouseIndex = id;
  }

  showLoginForm() {
    this.isLoginClicked = !this.isLoginClicked;
    this.isRegisterClicked = false;
    this.isRegisterHouseClicked = false;
  }
  showRegisterForm() {
    this.isRegisterClicked = !this.isRegisterClicked;
    this.isLoginClicked = false;
    this.isRegisterHouseClicked = false;
  }

  registerUser(user: IUserRegisterModel) {
    this.users.push(user);
    console.log(this.users);
  }

  loginUserFun(user: IUserRegisterModel) {
    const findedUser = this.users.find(user =>
      this.loginUser.email === user.email &&
      this.loginUser.password === user.password);
    findedUser ? this.information = 'Welcome' : this.information = 'User is not found';
    console.log(this.information);
  }

  registerHouse(house: IHouseRegisterModel) {
    this.houses.push(house);
    console.log(this.houses);
  }



}
