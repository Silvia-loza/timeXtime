import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private url1 = "http://localhost:3000/header/casita"
  private url2 = "http://localhost:3000/chat"
  public peticiones: object
  public chats:object

  constructor(private http: HttpClient) { }

  getPeticiones(){

    return this.http.get(this.url1)
  }

  getChats(id: number){

    return this.http.get(this.url2 + "?id=" + id)
  }
}
