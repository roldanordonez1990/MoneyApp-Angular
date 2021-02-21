import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioLoginService } from 'src/app/services/usuario-login.service';
import { DatosUpdateUsuarioService } from 'src/app/services/datos-update-usuario.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-datos-usuario-update',
  templateUrl: './datos-usuario-update.component.html',
  styleUrls: ['./datos-usuario-update.component.scss']
})
export class DatosUsuarioUpdateComponent implements OnInit {
  usuario: Usuario = null;
  updateRegistroForm: FormGroup; // Permite tener un objeto linkado a los campos del formulario de autenticación
  ocultarPassword: boolean = true; // Utilizado para conocer si se muestra u oculta el contenido del campo password
  constructor(private router: Router, private usuarioService: UsuarioLoginService, 
    private datosUpdateUsuario: DatosUpdateUsuarioService) { }

  ngOnInit(): void {
    this.cargarDatosUsuarioAutenticado();
    this.updateRegistroForm = new FormGroup({
      username: new FormControl ('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required])
    });
  }


    // Este método llama al servicio de usuarios, le pide obtener el usuario autenticado y pone sus datos en pantalla.
    cargarDatosUsuarioAutenticado() {
        this.usuarioService.getUsuarioAutenticado(true).subscribe(usuario => {
        // Cuando obtengo los datos, los muestro en los controles del formulario.
        this.usuario = usuario; 
        this.updateRegistroForm.controls.username.setValue(this.usuario.username);
        this.updateRegistroForm.controls.email.setValue(this.usuario.email);
        this.updateRegistroForm.controls.password.setValue(this.usuario.password);
       
      });
    }
    /**
     * 
     */
/*
    actualizarDatos() {
      this.comunicacionAlertas.abrirDialogCargando(); // Planto la pantalla de carga
  
      // Leo los valores de los controles del formulario y los introduzco en this.usuario
      this.usuario.usuario = this.form.controls.usuario.value;
      this.usuario.email = this.form.controls.email.value;
      this.usuario.nombre = this.form.controls.nombre.value;
      this.usuario.fechaNacimiento = this.form.controls.fechaNacimiento.value.getTime();
      this.usuario.nacionalidad = this.form.controls.nacionalidad.value;
      this.usuario.sexo = this.form.controls.sexo.value;
  
      // Envío los valores de this.usuario al usuarioService y espero la respuesta del servidor.
      this.usuarioService.actualizaDatosUsuario(this.usuario).subscribe(resultado => {
        if (resultado["result"] == "fail") { // Ha ocurrido algún fallo en el servidor
          this.comunicacionAlertas.abrirDialogError('Error al actualizar los datos del usuario. Inténtelo más tarde.')
        }
        else { // Todo ha ido correctamente, muestro un mensaje en pantalla para informar, me subscribo al evento de
          // cierre del mensaje y después redirijo al listado de mensajes.
          this.comunicacionAlertas.abrirDialogInfo('Usuario actualizado').subscribe(result => {
            this.router.navigate(['/listadoMensajes']);
          });
        }
      })
    }
  */

  updateDatos(){
    this.datosUpdateUsuario.updateDatosUsario(this.updateRegistroForm.controls.username.value, this.updateRegistroForm.controls.email.value,
      this.updateRegistroForm.controls.password.value).subscribe(data => {
      //        console.log(data);
      this.router.navigate(['/login']);
        
    });
  }
/**
 * 
 */
  volverAlosCometidos(){
    this.router.navigate(['/listadoCometidos']);
  }
}
