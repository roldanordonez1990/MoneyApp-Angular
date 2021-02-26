import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioLoginService } from 'src/app/services/usuario-login.service';
import { FormTransactionService } from 'src/app/services/form-transaction.service';
import { JwtService } from '../../services/jwt.service';
import { DialogosService } from '../../services/dialogos.service';


@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit {

  loginForm: FormGroup; 
  ocultarPassword: boolean = true;

  constructor(private router: Router, private usuarioService: UsuarioLoginService,
    private autenticadorJwtService: JwtService, private dialogosService: DialogosService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('Francisco', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('1234', [Validators.required])
    });
  }


  /**
 * Método que autentica un usuario con los valores expuestos en el formulario del template
 */
  autenticarUsuario() {
    // Utilizo el "UsuarioService" para enviar los datos de logado y subscribirme a la respuesta del 
    // servidor
    this.dialogosService.abrirDialogCargando();
    this.usuarioService.autenticaUsuario(this.loginForm.controls.username.value,
      this.loginForm.controls.password.value).subscribe(data => {
        //        console.log(data);
        if (data.jwt != undefined) {
          this.autenticadorJwtService.almacenaJWT(data.jwt);
          console.log('Datos correctos');
          this.router.navigate(['/listadoCometidos']);
          this.dialogosService.cerrarDialogo();
          this.usuarioService.emitirNuevoCambioEnUsuarioAutenticado(); // Emito evento de cambio en usuario autenticado

        }
        else {
          this.dialogosService.abrirDialogError("Datos introducidos incorrectos");
          console.log('Datos incorrectos');
        }
      });
  }

  registro() {
    this.dialogosService.abrirDialogCargando();
    this.router.navigate(['/registroUsuario']);
    this.dialogosService.cerrarDialogo();
  }
}
