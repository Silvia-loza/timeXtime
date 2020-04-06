import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peticiones } from '../models/peticiones';
import { Petusu } from '../models/petusu';

@Injectable({
  providedIn: 'root'
})
export class NuevatareaService {
  private url = "http://localhost:3000/nueva-peticion/confirmar"
  private url2 = "http://localhost:3000/nueva-peticion/confirmar2"
  private url3 = "http://localhost:3000/nueva-peticion/confirmar3"
  private url4 ="http://localhost:3000/peticiones/editar"
  private url5 ="http://localhost:3000/perfil/eliminar"

  peticion:Peticiones

  constructor(private http: HttpClient) { }

postTarea(nuevaTarea: Peticiones){

  return this.http.post(this.url, nuevaTarea )
}

getUltimaPeticion(){

  return this.http.get(this.url2)
}

postPetUsu(nuevoPetUsu:Petusu){

  return this.http.post(this.url3, nuevoPetUsu)
}

putTarea(editarTarea: Peticiones){
  return this.http.put(this.url4, editarTarea)
};
}