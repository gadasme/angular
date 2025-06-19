import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleComponent } from './ingreso-egreso/detalle/detalle.component';
import { EstadisticaComponent } from './ingreso-egreso/estadistica/estadistica.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IngresoEgresoComponent } from './ingreso-egreso/ingreso-egreso.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegisterComponent } from './auth/register/register.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"ingreso-egreso-app-304b1","appId":"1:178858434186:web:0056591e69533085139773","storageBucket":"ingreso-egreso-app-304b1.firebasestorage.app","apiKey":"AIzaSyCoF2D56u8bBqVHuFHUzH2_aZ7mbvqiG28","authDomain":"ingreso-egreso-app-304b1.firebaseapp.com","messagingSenderId":"178858434186","measurementId":"G-KGYQS20WQL"})),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
