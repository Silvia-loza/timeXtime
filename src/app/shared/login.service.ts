import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost:3000/registro/iniciar-sesion"

  public usuarioLogin:object

  constructor(private http: HttpClient) { }

  getUsuario(email:String, contrasena: String){

    return this.http.get(this.url + "?email=" + email + "&contrasena=" + contrasena)
  }
}
