import { Component, OnInit } from '@angular/core';
import { CometidosService } from 'src/app/services/cometidos.service';
import { Cometidos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-cometidos-usuario',
  templateUrl: './cometidos-usuario.component.html',
  styleUrls: ['./cometidos-usuario.component.scss']
})
export class CometidosUsuarioComponent implements OnInit {

  listadoCometidos: Cometidos[];

  constructor(private cometidosService: CometidosService) { }

  ngOnInit(): void {

    this.cometidosService.getCometidosPorUsuario().subscribe(data =>{
      
      this.listadoCometidos = data;
        console.log(data);
    });
  }
}
