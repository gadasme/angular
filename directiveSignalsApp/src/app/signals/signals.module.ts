import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';


@NgModule({
  declarations: [
    SignalsLayoutComponent,
    SideMenuComponent,
    UserInfoPageComponent,
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule
  ]
})
export class SignalsModule { }
