import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url1='http://localhost:3000/registro/modal/nuevo-registro'

  private url = "http://localhost:3000/registro/iniciar-sesion"

  public usuarioLogin:object

  public isLogged: boolean

  

  constructor(private http: HttpClient) {

    
    this.isLogged = false
    
  }

  getUsuario(email:String, contrasena: String){

    return this.http.get(this.url + "?email=" + email + "&contrasena=" + contrasena)
  }

  postUsuario(newUser: Usuarios){
    return this.http.post(this.url1, newUser)
  }
}
