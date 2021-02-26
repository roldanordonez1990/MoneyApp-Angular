import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogosService } from '../../services/dialogos.service';
import { DialogTypes } from '../../components/dialogos/dialogos-general';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  loginFormDudas: FormGroup; 

  constructor(private router: Router, private dialogosService: DialogosService) { }

  ngOnInit(): void {
    this.loginFormDudas = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      comentario: new FormControl('', [Validators.required])
    });
  }

  /**
   * 
   */
  volverAcometidos(){
    this.router.navigate(['/listadoCometidos']);

  }
  /**
   * 
   */
  dudaEnviada(){
    this.dialogosService.abrirDialogInfo("¡Gracias por tu confianza! Resolveremos tu duda en breve");
     

        this.router.navigate(['/listadoCometidos']);
      }
    
  
}
