import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseComponentsComponent } from './components/house-components/house-components.component';
import { RegisterUserComponentComponent } from './components/register-user-component/register-user-component.component';
import { RegisterHouseComponentComponent } from './components/register-house-component/register-house-component.component';
import { LoginUserComponentComponent } from './components/login-user-component/login-user-component.component';
import {FormsModule} from '@angular/forms';
import { ChangeRatePipe } from './pipes/change-rate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HouseComponentsComponent,
    RegisterUserComponentComponent,
    RegisterHouseComponentComponent,
    LoginUserComponentComponent,
    ChangeRatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
