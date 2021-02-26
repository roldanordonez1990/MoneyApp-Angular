import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistroUsuarioService } from 'src/app/services/registro-usuario.service';
import { Router } from '@angular/router';
import { DialogosService } from '../../services/dialogos.service';
import { DialogTypes } from '../../components/dialogos/dialogos-general';

@Component({
  selector: 'app-registro-nuevo-usuario',
  templateUrl: './registro-nuevo-usuario.component.html',
  styleUrls: ['./registro-nuevo-usuario.component.scss']
})
export class RegistroNuevoUsuarioComponent implements OnInit {

  loginFormRegistro: FormGroup; 
  ocultarPassword: boolean = true; 
  constructor(private registroUsuarioService: RegistroUsuarioService, private router: Router,
    private dialogosService: DialogosService) { }

  ngOnInit(): void {
    this.loginFormRegistro = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  nuevoRegistro() {
    this.dialogosService.abrirDialogCargando();
    this.registroUsuarioService.registroNuevoUsuario(this.loginFormRegistro.controls.username.value,
      this.loginFormRegistro.controls.email.value, this.loginFormRegistro.controls.password.value).subscribe(data => {
        //        console.log(data);
      });

    this.dialogosService.abrirDialogConfirmacion("¡Usuario añadido correctamente! ¿Desea volver al inicio ahora?").subscribe(opcionElegida => {
      if (opcionElegida == DialogTypes.RESPUESTA_ACEPTAR) {

        this.router.navigate(['/login']);
      }
    });
  }

  volverAlogin() {
    this.dialogosService.abrirDialogCargando();
    this.router.navigate(['/login']);
    this.dialogosService.cerrarDialogo();

  }
}
