import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/interfaces/interfaces';
import { NavigationHeaderService } from 'src/app/services/navigation-header.service';
import { UsuarioLoginService } from 'src/app/services/usuario-login.service';
import { Usuario } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';
import { DialogosService } from '../../services/dialogos.service';
import { JwtService } from '../../services/jwt.service';
import { DialogTypes } from '../../components/dialogos/dialogos-general';


@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {
  usuarioAutenticado: Usuario; // Guardo el usuario autenticado
  //Guardo en esta variable el cambio del saldo de la cuenta
  cuentaDelUsuario: Cuenta[];

  constructor(private navigationHeaderService: NavigationHeaderService,
    private usuariosService: UsuarioLoginService, private router: Router,
    private dialogosService: DialogosService, private autenticadorJwtService: JwtService) { }

  ngOnInit(): void {

    this.usuariosService.getUsuarioAutenticado().subscribe(usuario => {
      if (usuario == null)
        this.router.navigate(['/login']);
      else {
        this.navigationHeaderService.getCuentaUsuario().subscribe(data => {
          this.cuentaDelUsuario = data['cuentas'];
          console.log(this.cuentaDelUsuario);
        });
        this.usuariosService.cambiosEnUsuarioAutenticado.subscribe(nuevoUsuarioAutenticado => {
          this.usuarioAutenticado = nuevoUsuarioAutenticado;
        });
    
      }
    });

  }
  /**
   * 
   */
  abandonarSesion() {
    this.dialogosService.abrirDialogConfirmacion("¿Quiere abandonar la sesión?").subscribe(opcionElegida => {
      if (opcionElegida == DialogTypes.RESPUESTA_ACEPTAR) {
        this.autenticadorJwtService.eliminaJWT();
        this.usuarioAutenticado = null;
        this.router.navigate(['/login']);
      }
    });
  }
  /**
   * 
   */
  irAdatosUpdateUsuario() {
    this.router.navigate(['/updateDatosUsario']);
  }
  /**
   * 
   */
  irAcontacto(){
    this.router.navigate(['/contacto']);

  }
}
