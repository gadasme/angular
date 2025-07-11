import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private fb: FormBuilder, 
      private authService: AuthService,
      private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email ],
      password: ['', Validators.required]
    });
  }

  loginUsuario() {
    if (this.loginForm.invalid) return;

    Swal.fire({
      title: "Espere por favor...",
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const { email, password } = this.loginForm.value;
    this.authService.loginUsuario(email, password)
      .then((credenciales: any) => {
        console.log('credenciales :>> ', credenciales);
        Swal.close();
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.error('Error al iniciar sesión', err);
        Swal.fire({
          icon: 'error',
          title: 'Error al iniciar sesión',
          text: err.message
        });
      });
  }

}
