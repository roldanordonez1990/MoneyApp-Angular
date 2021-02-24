import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
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

  //asignamos las columnas para la tabla en un array
  columnas: string[] = ['Gasto', 'Categoria', 'Lugar', 'Fecha', 'Cuenta', 'Comision', 'Eliminar'];
  cometidoFormDelete: FormGroup;
  listadoCometidos: Cometidos[];
  usuarios: Usuario[];
  //asignamos a una variable el objeto tablaDatasource con los Cometidos
  dataSourceTabla: MatTableDataSource<Cometidos>
 
  constructor(private cometidosService: CometidosService, private dialogosService: DialogosService) { }

  ngOnInit(): void {

    //Llamamos al método del servidor con el que recogemos todos los cometidos y le asignamos los resultados (data)
    //al objeto dataSourceTabla
    this.cometidosService.getCometidosPorUsuario().subscribe(data =>{
      this.dataSourceTabla = new MatTableDataSource<Cometidos>(data['cometidos']);
      //también se lo asignamos a este listado para poder usarlo
      this.listadoCometidos = data['cometidos'];
    })
    
    this.cometidoFormDelete = new FormGroup({
      idcometido: new FormControl ()
     
    });
    /*
    this.cometidosService.getCometidosPorUsuario().subscribe(data =>{
      
      this.listadoCometidos = data['cometidos'];
        console.log(this.listadoCometidos);
    });
  */
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