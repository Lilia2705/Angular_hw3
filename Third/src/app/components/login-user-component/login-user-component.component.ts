import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHouseRegisterModel, IUserLoginModel} from '../../models';

@Component({
  selector: 'app-login-user-component',
  templateUrl: './login-user-component.component.html',
  styleUrls: ['./login-user-component.component.css']
})
export class LoginUserComponentComponent  {

  @Input() loginUser: IUserLoginModel;
  @Output() loginedUser = new EventEmitter()
  constructor() { }


  loginSomeUser() {
    this.loginedUser.emit(this.loginUser);

  }
}
