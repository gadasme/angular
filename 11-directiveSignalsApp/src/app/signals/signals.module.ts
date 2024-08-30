import { NgModule } from '@angular/core';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { CommonModule } from '@angular/common';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';


@NgModule({
  declarations: [
    SignalsLayoutComponent,
    SideMenuComponent,
    UserInfoPageComponent,
    PropertiesPageComponent,
  ],
  imports: [
    SignalsRoutingModule,
    CommonModule,
  ]
})
export class SignalsModule { }
