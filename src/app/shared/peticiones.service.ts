import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peticiones } from '../models/peticiones';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  private url = "http://localhost:3000/peticiones/publicadas"
  private url2 = "http://localhost:3000/peticiones/solicitadas"
  private url3 = "http://localhost:3000/boton/solicitar"
  private url4 = "http://localhost:3000/boton/valorar/cambios-"
  private url5 = "http://localhost:3000/header/perfil"
  
  constructor(private http:HttpClient) { }

  getPeticionesPub(id: number){

    return this.http.get(this.url + "?id=" + id)
  }

  getPeticionesSol(id: number){

    return this.http.get(this.url2 + "?id=" + id)
  }

  putAceptar(peticion:Peticiones){

    return this.http.put(this.url3 + "/aceptar", peticion)
  }

  putRechazar(peticion:Peticiones){

    return this.http.put(this.url3 + "/rechazar", peticion)
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

  putCambiosUsuario(usuario:Usuarios){

    return this.http.put(this.url4 + "usuario", usuario)
  }

  putCambiosUsuarioVal(usuario:Usuarios){

    return this.http.put(this.url4 + "usuarioVal", usuario)
  }

  putCambiosPeticionCre(peticion:Peticiones){

    return this.http.put(this.url4 + "peticionCre", peticion)
  }

  putCambiosPeticionSol(peticion:Peticiones){

    return this.http.put(this.url4 + "peticionSol", peticion)
  }

  putRechazarResta(usuario:Usuarios){

    return this.http.put(this.url3 + "/rechazar-resta", usuario)
  }

  getUsuarios(id:number){

    return this.http.get(this.url5 + "?id=" + id)
  }
}
