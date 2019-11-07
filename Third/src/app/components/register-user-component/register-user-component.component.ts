import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHouseRegisterModel, IUserRegisterModel} from '../../models';

@Component({
  selector: 'app-register-user-component',
  templateUrl: './register-user-component.component.html',
  styleUrls: ['./register-user-component.component.css']
})
export class RegisterUserComponentComponent  {

  @Input() userToCreate: IUserRegisterModel;
  @Output() createUser = new EventEmitter()

  constructor() { }

  registerThisUser() {
    this.createUser.emit(this.userToCreate);
  }


}
