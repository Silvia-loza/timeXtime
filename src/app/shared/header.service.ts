import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private url1 = "http://localhost:3000/header/casita"
  public peticiones: object

  constructor(private http: HttpClient) { }

  getPeticiones(){

    return this.http.get(this.url1)
  }
}
