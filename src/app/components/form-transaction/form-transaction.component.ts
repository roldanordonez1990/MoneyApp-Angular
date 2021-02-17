import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-transaction',
  templateUrl: './form-transaction.component.html',
  styleUrls: ['./form-transaction.component.scss']
})
export class FormTransactionComponent implements OnInit {

  loginForm: FormGroup; 
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      tipoTransaccion: new FormControl ('', [Validators.required]),
      categoria: new FormControl ('', [Validators.required]),
      gasto: new FormControl ('', [Validators.required]),
      lugar: new FormControl ('', [Validators.required]),

    });
  }

}
