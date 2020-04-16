import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peticiones } from '../models/peticiones';
import { Chat } from '../models/chat';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class OfertaPerfilService {

  private url = "http://localhost:3000/boton"
  private url2 = "http://localhost:3000/chat"

  constructor(private http:HttpClient) { }

  putSumaPeticionSol(usuario:Usuarios){

    return this.http.put(this.url + "/solicitar/suma", usuario)
  }

  putSolicitarPeticion(peticion:Peticiones){

    return this.http.put(this.url + "/solicitar-peticion", peticion)
  }

  postIniciarChat(chat:Chat){

    return this.http.post(this.url2, chat)
  }
}
