import { Injectable ,Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DatosConJwt } from '../interfaces/interfaces'
import { Usuario } from '../interfaces/interfaces'

import { Md5 } from 'ts-md5/dist/md5'; // Para codificar en MD5

/**
 * El decorador @Inyectable permite que esta clase se instancie por el inyector de código
 */
@Injectable({
  providedIn: 'root'
})

/**
 * Esta clase permitirá autenticar y modificar datos del usuario
 */
export class UsuarioLoginService {
  // Para almacenar el usuario autenticado
  usuarioAutenticado: Usuario; 
  //output sirve para comunicarse entre componentes
  @Output()  
  // Evento cuando el usuario autenticado ha cambiado
  cambiosEnUsuarioAutenticado = new EventEmitter<Usuario>(); 
  // Constructor con objetos que deben crearse por parte del inyector de código.
  constructor(private http: HttpClient) { }


  /**
   * Método para autenticar al usuario, recibiendo su nombre y su contraseña.
   */
  autenticaUsuario (username: string, password: string) : Observable<DatosConJwt> {
    const md5 = new Md5(); // Creo un objeto que permite codificar en MD5
      var jsonObject = {
        username: username,
        password: md5.appendStr(password).end().toString()  // Codifico en MD5 el password recibido
      };

    // Envío la petición http y devuelvo el Observable, para que cualquiera pueda subscribirse.
      return this.http.post<DatosConJwt>('/usuario/autenticadoJWT', jsonObject).pipe(
      tap(data => { 
       console.log('Desde tap miro los datos recibidos: ' + data["jwt"]);
      })
    ); 
  }
 
  /**
   * 
   */
  getUsuarioAutenticado(incluirImagen: boolean = false): Observable<Usuario> {
    // Petición para obtener el usuario autenticado, funcionará porque se envía el JWT en 
    // cada petición, gracias al HttpInterceptor
    return this.http.get<Usuario>('/usuario/autenticadoImagen?foto=' + incluirImagen)
    .pipe(
      tap(usuarioAutenticado => {
        // En la condición del if intento detectar varios casos que provocan un cambio en 
        // el usuario autenticado
        
            //this.emitirNuevoCambioEnUsuarioAutenticado();
            this.usuarioAutenticado = usuarioAutenticado;
          
      })
    );
  }
  /**
   * 
   */
  emitirNuevoCambioEnUsuarioAutenticado () {
    this.getUsuarioAutenticado(true).subscribe(usuarioAutenticado => {
      this.cambiosEnUsuarioAutenticado.emit(usuarioAutenticado);
    });
  }


}
