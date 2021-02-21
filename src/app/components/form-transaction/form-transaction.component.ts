import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormTransactionService } from 'src/app/services/form-transaction.service';
import { Router } from '@angular/router';
import { Cuenta, Establecimiento } from '../../interfaces/interfaces';


@Component({
  selector: 'app-form-transaction',
  templateUrl: './form-transaction.component.html',
  styleUrls: ['./form-transaction.component.scss'],
 
})
export class FormTransactionComponent implements OnInit {

  cometidoForm: FormGroup; 
  ingresoForm: FormGroup;
  listadoCuentaUsuario: Cuenta[];
  listadoTodasLasCuentas: Cuenta [];
  listadoEstablecimientos: Establecimiento[];
  constructor(private formTransaction: FormTransactionService, private router: Router) { }

  ngOnInit(): void {
    this.cometidoForm = new FormGroup({
      gasto: new FormControl ('',[Validators.required]),
      categoria: new FormControl ('',[Validators.required]),
      lugar: new FormControl ('',[Validators.required]),
      cuenta: new FormControl ('',[Validators.required]),
      saldo: new FormControl ('', [Validators.required]),
      num_cuenta: new FormControl ('', [Validators.required])

    });

    this.ingresoForm = new FormGroup({
      saldo: new FormControl ('', [Validators.required]),
      num_cuenta: new FormControl ('', [Validators.required])

    });
    this.formTransaction.getTodasLasCuentasDeUsuario().subscribe(data =>{
          
      this.listadoCuentaUsuario = data['cuentas'];
        console.log(this.listadoCuentaUsuario);
      });

    this.formTransaction.getTodasLosEstablecimientos().subscribe(data =>{
        
      this.listadoEstablecimientos = data['establecimiento'];
        console.log(this.listadoEstablecimientos);
      });

    this.formTransaction.getTodasLasCuentas().subscribe(data =>{
        
      this.listadoTodasLasCuentas = data['todasLasCuentas'];
        console.log(this.listadoTodasLasCuentas);
      });
}

  nuevoCometidoIntroducido() {
    
    this.formTransaction.nuevoCometidoPorServicio(this.cometidoForm.controls.gasto.value,
      this.cometidoForm.controls.categoria.value, this.cometidoForm.controls.lugar.value, this.cometidoForm.controls.cuenta.value).subscribe(data => {
//        console.log(data);
       
      window.location.reload();

      });
  }

  /**
   * 
   */
  nuevoIngreso() {
    
    this.formTransaction.nuevoIngresoPorServicio(this.ingresoForm.controls.saldo.value,
      this.ingresoForm.controls.num_cuenta.value).subscribe(data => {
//        console.log(data);
       
      window.location.reload();

      });
  }

}
