import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peticiones } from '../models/peticiones';
import { Petusu } from '../models/petusu';

@Injectable({
  providedIn: 'root'
})
export class OfertaPerfilService {

  private url = "http://localhost:3000/boton"

  constructor(private http:HttpClient) { }

  putSolicitarPeticiones(peticion:Peticiones){

    return this.http.put(this.url + "/solicitar-peticiones", peticion)
  }

  putSolicitarPetUsu(id: number, petUsu:Petusu){

    return this.http.put(this.url + "/solicitar-petusu?id=" + id, petUsu)
  }
}
