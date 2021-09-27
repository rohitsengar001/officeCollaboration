import { Routes, RouterModule } from '@angular/router';
import {CommonlayoutComponent} from './commonlayout/commonlayout.component';
const routes: Routes = [
  { path: '', component: CommonlayoutComponent},
];

export const CommonlayoutRoutes = RouterModule.forChild(routes);
