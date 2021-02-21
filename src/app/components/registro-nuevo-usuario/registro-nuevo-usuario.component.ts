import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistroUsuarioService } from 'src/app/services/registro-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-nuevo-usuario',
  templateUrl: './registro-nuevo-usuario.component.html',
  styleUrls: ['./registro-nuevo-usuario.component.scss']
})
export class RegistroNuevoUsuarioComponent implements OnInit {

  loginFormRegistro: FormGroup; // Permite tener un objeto linkado a los campos del formulario de autenticación
  ocultarPassword: boolean = true; // Utilizado para conocer si se muestra u oculta el contenido del campo password
  constructor(private registroUsuarioService: RegistroUsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.loginFormRegistro = new FormGroup({
      username: new FormControl ('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required])
    });
  }

  nuevoRegistro(){

    this.registroUsuarioService.registroNuevoUsuario(this.loginFormRegistro.controls.username.value, 
      this.loginFormRegistro.controls.email.value, this.loginFormRegistro.controls.password.value).subscribe(data => {
        //        console.log(data);
        this.router.navigate(['/login']);
          
      });
  }

  volverAlogin(){
    this.router.navigate(['/login']);
  }
}
