import { Routes, RouterModule } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component: AdminHomeComponent},
  {path:'profile',component: AdminProfileComponent},
  {path:'addemp',component: AddempComponent}
];

export const AdminRoutes = RouterModule.forChild(routes);
