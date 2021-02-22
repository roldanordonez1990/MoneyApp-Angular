import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CometidosService } from 'src/app/services/cometidos.service';
import { Cometidos } from '../../interfaces/interfaces';
import { Usuario } from '../../interfaces/interfaces';
import { DialogosService } from '../../services/dialogos.service'; 

@Component({
  selector: 'app-cometidos-usuario',
  templateUrl: './cometidos-usuario.component.html',
  styleUrls: ['./cometidos-usuario.component.scss']
})
export class CometidosUsuarioComponent implements OnInit {

  cometidoFormDelete: FormGroup;
  listadoCometidos: Cometidos[];
  usuarios: Usuario[];
 
  constructor(private cometidosService: CometidosService, private dialogosService: DialogosService) { }

  ngOnInit(): void {

    this.cometidoFormDelete = new FormGroup({
      idcometido: new FormControl ()
     
    });
    
    this.cometidosService.getCometidosPorUsuario().subscribe(data =>{
      
      this.listadoCometidos = data['cometidos'];
        console.log(this.listadoCometidos);
    });

    this.cometidosService.getDatosUsuario().subscribe(data =>{
      
      this.usuarios = data['username'];
        console.log(this.listadoCometidos);
    });

  }

  deleteCometidos(idcometido){
    //this.dialogosService.abrirDialogCargando();
    this.cometidosService.deleteCometido(idcometido).subscribe(data => {
      //        console.log(data);
    //this.dialogosService.cerrarDialogo();
        
      window.location.reload();
      
      });
  }
}
