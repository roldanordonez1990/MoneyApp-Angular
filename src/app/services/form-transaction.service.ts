import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Cometidos } from '../interfaces/interfaces';
import { Cuenta } from '../interfaces/interfaces';
import { Establecimiento } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class FormTransactionService {

  constructor(private http: HttpClient) { }
  //
  nuevoCometidoPorServicio(gasto: number, categoria: string, lugar: number, cuenta: number): Observable<Cometidos> {

    var jsonObject = {
      gasto: gasto,
      categoria: categoria,
      lugar: lugar,
      cuenta: cuenta

    };

    return this.http.put<Cometidos>('/cometido/nuevo', jsonObject).pipe(
      //    tap(data => console.log(data)),
    );
  }
  /**
   * 
   */
  nuevoIngresoPorServicio(saldo: number, num_cuenta: number): Observable<Cuenta> {

    var jsonObject = {
      saldo: saldo,
      num_cuenta: num_cuenta

    };

    return this.http.put<Cuenta>('/ingreso/nuevo', jsonObject).pipe(
      //    tap(data => console.log(data)),
    );
  }
  /**
   * 
   */
  getTodasLasCuentasDeUsuario(): Observable<Cuenta[]> {
    return this.http.get<Cuenta[]>('/cuentasUsuario/all').pipe(
      //    tap(data => console.log(data)),
    );
  }
  /**
   * 
   */

  getTodasLosEstablecimientos(): Observable<Establecimiento[]> {
    return this.http.get<Establecimiento[]>('/establecimientosAngular/all').pipe(
      //    tap(data => console.log(data)),
    );
  }
  /**
   * 
   */
  getTodasLasCuentas(): Observable<Cuenta[]> {
    return this.http.get<Cuenta[]>('/cuentas/all').pipe(
      //    tap(data => console.log(data)),
    );
  }
  /**
   * 
   */
  getTodasLasCuentasPorNombre(): Observable<Cuenta[]> {
    return this.http.get<Cuenta[]>('/cuentas/allPorNombre').pipe(
      //    tap(data => console.log(data)),
    );
  }
}
