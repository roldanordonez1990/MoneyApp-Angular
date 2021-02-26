import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-terminos-legales',
  templateUrl: './terminos-legales.component.html',
  styleUrls: ['./terminos-legales.component.scss']
})
export class TerminosLegalesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  volver(){
    this.router.navigate(['/contacto']);

  }
}
