import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/interfaces/interfaces';
import { NavigationHeaderService } from 'src/app/services/navigation-header.service';
import { UsuarioLoginService } from 'src/app/services/usuario-login.service';
import { Usuario } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

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
    private usuariosService: UsuarioLoginService, private router: Router) { }

  ngOnInit(): void {
   
    this.navigationHeaderService.getCuentaUsuario().subscribe(data =>{
      
      this.cuentaDelUsuario = data['cuentas'];
        console.log(this.cuentaDelUsuario);
    });
    /**
     * 
     */
    this.usuariosService.cambiosEnUsuarioAutenticado.subscribe(nuevoUsuarioAutenticado => {
      this.usuarioAutenticado = nuevoUsuarioAutenticado;
    });
  }

  abandonarSesion(){
    this.router.navigate(['/login']);
  }

  irAdatosUpdateUsuario(){
    this.router.navigate(['/updateDatosUsario']);
  }
}
