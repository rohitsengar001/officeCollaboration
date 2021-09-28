import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component: AdminHomeComponent},
  {path:'profile',component: AdminProfileComponent},
];

export const AdminRoutes = RouterModule.forChild(routes);
