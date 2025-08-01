import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as ui from '../../shared/ui.action';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent implements OnInit, OnDestroy {

  public registroForm!: FormGroup;
  cargando: boolean = false;
  uiSubscription!: Subscription;
  
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {    
  }

  ngOnDestroy(): void {
    this.uiSubscription.unsubscribe();
  }

  ngOnInit(): void {    
    this.registroForm = this.fb.group({
      nombre:   ['', Validators.required],
      correo:   ['', [ Validators.required, Validators.email ] ],
      password: ['', Validators.required]
    });
    this.uiSubscription = this.store.select('ui').subscribe(ui => {
      this.cargando = ui.isLoading;
      console.log('cargando subs');
    });
  }
  
  crearUsuario() {
    if (this.registroForm.invalid) return;
    
    this.store.dispatch(ui.isLoading());
    //  Swal.fire({
    //     title: "Espere por favor...",
    //     didOpen: () => {
    //       Swal.showLoading();
    //     }
    //   });

    const { nombre, correo, password } = this.registroForm.value;
    this.authService.crearUsuario(nombre, correo, password)
      .then((credenciales: any) => {
        console.log('credenciales :>> ', credenciales);
        // Swal.close();
        this.store.dispatch(ui.stopLoading());
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.error('Error al crear usuario', err);
        this.store.dispatch(ui.stopLoading());
        Swal.fire({
          icon: 'error',
          title: 'Error al crear usuario',
          text: err.message
        });
      });
    ;
  }




}
