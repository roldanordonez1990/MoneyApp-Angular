import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cometidos } from '../interfaces/interfaces';
import { tap } from 'rxjs/operators';
import { Usuario } from '../interfaces/interfaces'


@Injectable({
  providedIn: 'root'
})
export class CometidosService {

  constructor(private http: HttpClient) { }

  getCometidosPorUsuario(): Observable<Cometidos[]> {
    return this.http.get<Cometidos[]>('/cometidos/all').pipe(
      //    tap(data => console.log(data)),
    );
  }
  /**
   * 
   */
  getDatosUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('/usuario/getDatos');
  }
  /**
   * 
   */

  deleteCometido(idcometido: 50): Observable<Cometidos> {

    return this.http.delete<Cometidos>('/cometido/delete?idcometido=' + idcometido).pipe(
      tap(data => console.log(idcometido)),

    );

  }

}