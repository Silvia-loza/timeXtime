import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url1='http://localhost:3000/registro/modal/nuevo-registro'

  private url = "http://localhost:3000/registro/iniciar-sesion"
  
  private url2 = "http://localhost:3000/header/casita"

  private url4 = "http://localhost:3000/header/perfil"
  
  public peticiones: object

  public usuarioLogin:object

  public isLogged: boolean

  

  constructor(private http: HttpClient) {}

  getUsuario(email:String, contrasena: String){

    return this.http.get(this.url + "?email=" + email + "&contrasena=" + contrasena)
  }

  postUsuario(newUser: Usuarios){
    return this.http.post(this.url1, newUser)
  }

  getPeticiones(){

    return this.http.get(this.url2)
  }

  getPerfil(){
    return this.http.get(this.url4)
  }
}
