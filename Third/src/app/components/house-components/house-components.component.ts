import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-house-components',
  templateUrl: './house-components.component.html',
  styleUrls: ['./house-components.component.css']
})
export class HouseComponentsComponent  {

  constructor() { }

@Input() house;

}
