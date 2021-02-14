import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cometidos } from '../interfaces/interfaces';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CometidosService {

  constructor(private http: HttpClient) { }

  getCometidosPorUsuario(): Observable<Cometidos[]>{
    return this.http.get<Cometidos[]>('/cometidos/all').pipe(
      //    tap(data => console.log(data)),
    );
  }
}
