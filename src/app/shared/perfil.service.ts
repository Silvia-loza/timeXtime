import { Injectable } from '@angular/core';
import { Usuarios} from '../../app/models/usuarios';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private url= "http://localhost:3000/perfil/guardar"
  private url2= "http://localhost:3000/header/perfil"
  
  constructor(private http: HttpClient) { }
  
  putPefil(newUsuario: Usuarios){
  return this.http.put(this.url, newUsuario)
};


 getPerfil(id_usuario: number)
 {
   return this.http.get(this.url2 + "?id=" + id_usuario)
 }

}