import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertsService } from '../../../shared/services/alert.service';

@Component({
  selector: 'itm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      role: any;
    },
    private formBuilder: FormBuilder,
    private alert: AlertsService,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  crearFormulario(): void {
    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
    });
  }

  login(): void {
    const { usuario, contrasena } = this.form.value;
    switch (this.data.role) {
      case 'admin':
        if (usuario === 'admin@mail.com' && contrasena === 'Admin1234*') {
          this.mensajeCorrecto(usuario);
        } else {
          this.mensajeError();
        }
        break;
      case 'organizador':
        if (
          usuario === 'organizador@mail.com' &&
          contrasena === 'Organizador1234*'
        ) {
          this.mensajeCorrecto(usuario);
        } else {
          this.mensajeError();
        }
        break;
      case 'usuario':
        if (usuario === 'user@mail.com' && contrasena === 'User1234*') {
          this.mensajeCorrecto(usuario);
          
        } else {
          this.mensajeError();
        }
        break;
    }
  }

  mensajeError(): void {
    this.alert.mensajeError('Oops..', 'Usuario o contraseña no validos');
  }

  mensajeCorrecto(usuario: string): void {
    this.alert
      .mensajeCorrecto('BIENVENIDO!', usuario.toLocaleUpperCase(), 'ACEPTAR')
      .then(() => {
        this.dialogRef.close();
      });
  }
}
