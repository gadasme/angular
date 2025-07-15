import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

import { AuthService } from '../../services/auth.service';
import * as ui from '../../shared/ui.action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm!: FormGroup;
  cargando: boolean = false;
  uiSubscription!: Subscription;

  constructor(private fb: FormBuilder, 
      private authService: AuthService,
      private store: Store<AppState>,
      private router: Router) {}
  
  ngOnDestroy(): void {
    this.uiSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required] ],
      password: ['', Validators.required]
    });
    this.uiSubscription = this.store.select('ui').subscribe(ui => {
      this.cargando = ui.isLoading;
      console.log('cargando subs');
    });
  }

  loginUsuario() {
    if (this.loginForm.invalid) return;

    this.store.dispatch(ui.isLoading());

    // Swal.fire({
    //   title: "Espere por favor...",
    //   didOpen: () => {
    //     Swal.showLoading();
    //   }
    // });

    const { email, password } = this.loginForm.value;
    this.authService.loginUsuario(email, password)
      .then((credenciales: any) => {
        console.log('credenciales :>> ', credenciales);
        // Swal.close();
        this.store.dispatch(ui.stopLoading());
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.error('Error al iniciar sesión', err);
        this.store.dispatch(ui.stopLoading());
        Swal.fire({
          icon: 'error',
          title: 'Error al iniciar sesión',
          text: err.message
        });
      });
  }

}
