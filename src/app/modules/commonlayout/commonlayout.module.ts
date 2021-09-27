import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonlayoutComponent } from './commonlayout/commonlayout.component';
import { CommonlayoutRoutes } from './commonlayout.routing';
import { AdminModule } from '../admin/admin.module';



@NgModule({
  declarations: [ CommonlayoutComponent,HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    CommonlayoutRoutes,
    AdminModule
  ],
  exports: [CommonlayoutComponent]
})
export class CommonlayoutModule { }
