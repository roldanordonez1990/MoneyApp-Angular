import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-imagen-usuario',
  templateUrl: './imagen-usuario.component.html',
  styleUrls: ['./imagen-usuario.component.scss']
})
export class ImagenUsuarioComponent implements OnInit {

  constructor() { }
  // El decorador Input hace que pueden se puedan personalizar propiedades de componentes en otros lugares
 
  @Input('usuario') usuario: Usuario;
  @Input('width') width: number;
  @Input('height') height: number;
  
  ngOnInit(): void {
  }

}
