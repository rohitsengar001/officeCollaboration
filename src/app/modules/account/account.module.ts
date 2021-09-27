import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginlogoutComponent } from './loginlogout/loginlogout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountRoutes } from './account.routing';



@NgModule({
  declarations: [LoginlogoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutes
  ],
  exports: [LoginlogoutComponent]
})
export class AccountModule { }
