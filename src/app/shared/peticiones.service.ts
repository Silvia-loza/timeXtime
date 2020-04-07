import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peticiones } from '../models/peticiones';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  private url = "http://localhost:3000/peticiones/publicadas"
  private url2 = "http://localhost:3000/peticiones/solicitadas"
  private url3 = "http://localhost:3000/boton/solicitar"

  constructor(private http:HttpClient) { }

  getPeticionesPub(id: number){

    return this.http.get(this.url + "?id=" + id)
  }

  getPetUsuPub(id: number){

    return this.http.get(this.url + "/petusu?id=" + id)
  }

  getPeticionesSol(id: number){

    return this.http.get(this.url2 + "?id=" + id)
  }

  getPetUsuSol(id: number){

    return this.http.get(this.url2 + "/petusu?id=" + id)
  }

  putAceptar(peticion:Peticiones){

    return this.http.put(this.url3 + "/aceptar", peticion)
  }

  putRechazar(peticion:Peticiones){

    return this.http.put(this.url3 + "/rechazar", peticion)
  }

  putRechazarPetUsu(peticion: Peticiones){

    return this.http.put(this.url3 + "/rechazar-petusu", peticion)
  }

  putRealizada(peticion:Peticiones){

    return this.http.put(this.url3 + "/realizar", peticion)
  }
}
