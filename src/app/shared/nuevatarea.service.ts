import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peticiones } from '../models/peticiones';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class NuevatareaService {
  private url = "http://localhost:3000/nueva-peticion/confirmar"
  private url4 ="http://localhost:3000/peticiones/editar"
  private url5 ="http://localhost:3000/perfil/eliminar"

  peticion:Peticiones

  constructor(private http: HttpClient) { }

  postTarea(nuevaTarea: Peticiones){

    return this.http.post(this.url, nuevaTarea )
  }

  putTarea(editarTarea: Peticiones){
    return this.http.put(this.url4, editarTarea)
  };

  putSumaPub(usuario:Usuarios){

    return this.http.put(this.url + "/suma", usuario)
  }
}