import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioLoginService } from 'src/app/services/usuario-login.service';
import { JwtService } from '../../services/jwt.service'; 


@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit {

  loginForm: FormGroup; // Permite tener un objeto linkado a los campos del formulario de autenticación
  ocultarPassword: boolean = true; // Utilizado para conocer si se muestra u oculta el contenido del campo password
  
  constructor(private router: Router, private usuarioService: UsuarioLoginService, private autenticadorJwtService: JwtService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl ('Francisco', [Validators.required, Validators.minLength(5)]),
      password: new FormControl ('1234', [Validators.required])
    });
  }


    /**
   * Método que autentica un usuario con los valores expuestos en el formulario del template
   */
  autenticarUsuario() {
    // Utilizo el "UsuarioService" para enviar los datos de logado y subscribirme a la respuesta del 
    // servidor
    this.usuarioService.autenticaUsuario(this.loginForm.controls.username.value,
      this.loginForm.controls.password.value).subscribe(data => {
//        console.log(data);
        if (data.jwt != undefined) {
          this.autenticadorJwtService.almacenaJWT(data.jwt);
          console.log('Datos correctos');
          this.router.navigate(['/listadoCometidos']);
        } 
        else {
          console.log('Datos incorrectos');
        }
      });
  }
}
