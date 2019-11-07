import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHouseRegisterModel} from '../../models';

@Component({
  selector: 'app-register-house-component',
  templateUrl: './register-house-component.component.html',
  styleUrls: ['./register-house-component.component.css']
})

export class RegisterHouseComponentComponent  {

  @Input() houseToCreate: IHouseRegisterModel;
  @Output() createHouse = new EventEmitter()


  constructor() { }


  registerThisHouse() {
    this.createHouse.emit(this.houseToCreate);
  }
}
