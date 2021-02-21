import { Injectable, Output, EventEmitter } from '@angular/core';
import { Cuenta } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationHeaderService {

  cuentaDetectada: Cuenta[]; 
  //output permite crear eventos a los que subscribirse
  @Output() 
  //a través de estos eventos, viaja un objeto Cuenta
  cambiosCuentaDetectada = new EventEmitter<Cuenta>(); 

  constructor(private http: HttpClient) { }

   /**
   * 
   */
  getCuentaUsuario(): Observable<Cuenta[]>{
    return this.http.get<Cuenta[]>('/cuentasUsuario/all').pipe(
         tap(dataCuenta => {
           this.cuentaDetectada = dataCuenta['cuentas'];
         })
    );
  }
/**
 * 
 */
  emitirCambioSaldoCuenta () {
    this.getCuentaUsuario().subscribe(cuentaDetectada => {
      this.cambiosCuentaDetectada.emit(cuentaDetectada['cuentas']);
    });
  }
}
