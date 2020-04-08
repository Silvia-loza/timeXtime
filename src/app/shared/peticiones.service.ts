import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peticiones } from '../models/peticiones';
import { Usuarios } from '../models/usuarios';
import { Petusu } from '../models/petusu';

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

  putCompletada(peticion:Peticiones){

    return this.http.put(this.url3 + "/completar", peticion)
  }

  putCompletadaRestaCreador(usuario:Usuarios){

    return this.http.put(this.url3 + "/completar-resta-creador", usuario)
  }

  putCompletadaSumaSolicitante(usuario:Usuarios){

    return this.http.put(this.url3 + "/completar-suma-solicitante", usuario)
  }
}
