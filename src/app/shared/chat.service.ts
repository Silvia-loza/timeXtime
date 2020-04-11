import { Injectable } from '@angular/core';
import { Chat } from '../models/chat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = "http://localhost:3000/chat"

  constructor(private http:HttpClient) { }

  putChat(chat:Chat){

    return this.http.put(this.url, chat)
  }

  getChatActualizado(id: number){

    return this.http.get(this.url + "/actualizado?id=" + id)
  }
}
