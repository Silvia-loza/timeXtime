import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peticiones } from '../models/peticiones';

@Injectable({
  providedIn: 'root'
})
export class NuevatareaService {
  private url = "http://localhost:3000/nueva-peticion/confirmar"
  peticion:Peticiones
  constructor(private http: HttpClient) { }

postTarea(nuevaTarea: Peticiones)
{
  return this.http.post(this.url, nuevaTarea )
}



}
