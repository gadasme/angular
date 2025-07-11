import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent implements OnInit {

  public registroForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {    
  }

  crearUsuario() {
    if (this.registroForm.invalid) return;

     Swal.fire({
        title: "Espere por favor...",
        didOpen: () => {
          Swal.showLoading();
        }
      });

    const { nombre, correo, password } = this.registroForm.value;
    this.authService.crearUsuario(nombre, correo, password)
      .then((credenciales: any) => {
        console.log('credenciales :>> ', credenciales);
        Swal.close();
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.error('Error al crear usuario', err);
        Swal.fire({
          icon: 'error',
          title: 'Error al crear usuario',
          text: err.message
        });
      });
    ;
  }

  ngOnInit(): void {    
    this.registroForm = this.fb.group({
      nombre:   ['', Validators.required],
      correo:   ['', [ Validators.required, Validators.email ] ],
      password: ['', Validators.required]
    });
  }



}
