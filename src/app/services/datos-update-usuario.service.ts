import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5'; // Para codificar en MD5
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatosUpdateUsuarioService {

  constructor(private http: HttpClient) { }

  updateDatosUsario(username: string, email: string, password: string): Observable<Usuario> {
    const md5 = new Md5(); // Creo un objeto que permite codificar en MD5
    var jsonObject = {
      username: username,
      email: email,
      password: md5.appendStr(password).end().toString()  // Codifico en MD5 el password recibido
    };

    // Envío la petición http y devuelvo el Observable, para que cualquiera pueda subscribirse.
    return this.http.put<Usuario>('/usuario/updateDatos', jsonObject).pipe(
      tap(data => {

      })
    );
  }

}
