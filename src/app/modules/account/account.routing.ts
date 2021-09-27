import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CommonlayoutComponent } from '../commonlayout/commonlayout/commonlayout.component';
import { LoginlogoutComponent } from './loginlogout/loginlogout.component';

//account/
const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', component: LoginlogoutComponent},
  // {path:'layout', component: CommonlayoutComponent},
   {path:'layout',loadChildren:()=>import('../commonlayout/commonlayout.module').then(m=>m.CommonlayoutModule),canActivate:[AuthGuard]},

  
];

export const AccountRoutes = RouterModule.forChild(routes);
