import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MuroService {

  private url1 = "http://localhost:3000/muro/barra-busqueda"
  private url2 = "http://localhost:3000/muro/titulo-tarjeta"
  private url3 = "http://localhost:3000/muro/titulo-tarjeta/usuario"
  private url4 = "http://localhost:3000/muro/modal/buscar"

  public peticion: object
  public usuario: object

  

  constructor(private http: HttpClient) { }

  getPeticionesBusqueda(descripcion: String){

    return this.http.get(this.url1 + "?descripcion=" + descripcion)
  }

  getPeticionesFiltros(categoria: String, precio: number, localizacion: String, fecha_finalizacion: Date){

    return this.http.get(this.url4 + "?categoria=" + categoria + "&precio=" + precio + "&localizacion=" + localizacion + "&fecha_finalizacion=" + fecha_finalizacion)
  }

  getPeticion(indice:number){

    return this.http.get(this.url2 + '?id_peticion=' + indice)
  }

  getUsuario(id:number){

    return this.http.get(this.url3 + '?id_peticion=' + id)
  }
}
