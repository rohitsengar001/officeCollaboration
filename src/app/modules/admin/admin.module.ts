import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { TodoAppModule } from '../todo-app/todo-app.module';
import { AdminRoutes } from './admin.routing';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AddempComponent } from './addemp/addemp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminHomeComponent, AdminProfileComponent, AddempComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoAppModule,
    AdminRoutes,
  ],
  exports: [AdminHomeComponent]
})
export class AdminModule { }
