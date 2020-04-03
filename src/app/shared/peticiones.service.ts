import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  private url = "http://localhost:3000/peticiones/publicadas"
  private url2 = "http://localhost:3000/peticiones/solicitadas"

  constructor(private http:HttpClient) { }

  getPeticionesPub(id: number){

    return this.http.get(this.url + "?id=" + id)
  }

  getPeticionesSol(id: number){

    return this.http.get(this.url2 + "?id=" + id)
  }
}
