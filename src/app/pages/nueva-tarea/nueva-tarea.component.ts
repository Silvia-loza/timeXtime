import { Component, OnInit } from '@angular/core';
import { NuevatareaService } from 'src/app/shared/nuevatarea.service';
import { Peticiones } from 'src/app/models/peticiones';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {
  public categoria: String
  peticiones: Object;
  constructor(private apiService: NuevatareaService) { }

categorias(categoria:String){
    this.categoria = categoria
  }


insertarTarea(foto:String, titulo:String, localizacion: String, precio:number, fecha_finalizacion: Date, descripcion: String)
  { 
    let peticion = new Peticiones()

    peticion.categoria=this.categoria
    peticion.foto=foto
    peticion.titulo=titulo
    peticion.localizacion=localizacion
    peticion.precio=precio
    peticion.fecha_finalizacion=fecha_finalizacion
    peticion.descripcion=descripcion

    this.apiService.postTarea(peticion).subscribe((data) =>
  {
    this.peticiones = data
    //console.log(data)
    })
  }






  ngOnInit(): void {
  }

}
