import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AdminProfileComponent } from '../admin/admin-profile/admin-profile.component';
import { CommonlayoutComponent } from './commonlayout/commonlayout.component';
//account/layout/common
const routes: Routes = [
  { path: '', redirectTo: 'common', pathMatch:'full'},
  { path: 'common', component: CommonlayoutComponent,
    children: [
      
      { path: '',redirectTo:'dashboard', pathMatch:'full'},
      { path: 'dashboard', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },
      
      
    ]
  },
];

export const CommonlayoutRoutes = RouterModule.forChild(routes);
