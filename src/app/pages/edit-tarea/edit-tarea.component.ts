import { Component, OnInit } from '@angular/core';
import {Peticiones} from '../../models/peticiones'
import {NuevatareaService} from 'src/app/shared/nuevatarea.service';
import {MuroService} from 'src/app/shared/muro.service'



@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.component.html',
  styleUrls: ['./edit-tarea.component.css']
})
export class EditTareaComponent implements OnInit {

  public categoria: String
  public peticion:object

  constructor(private apiService: NuevatareaService,  private apiService1:MuroService) { 



  this.peticion = this.apiService1.peticion
  
  }
  categorias(categoria:String){
    this.categoria = categoria
  }

  editarPeticion(foto:String, titulo:String, localizacion: String, precio:number, fecha_finalizacion: Date, descripcion: String)
   {
    let editarPeticion = new Peticiones();

    if(foto === undefined){

      editarPeticion.foto = this.peticion[0].foto
    } else {

      editarPeticion.foto=foto
    }

    editarPeticion.id_peticion = this.peticion[0].id_peticion
    editarPeticion.categoria=this.categoria
    
    editarPeticion.titulo=titulo
    editarPeticion.localizacion=localizacion
    editarPeticion.precio=precio
    editarPeticion.fecha_finalizacion=fecha_finalizacion
    editarPeticion.descripcion=descripcion

    


    this.apiService.putTarea(editarPeticion).subscribe((data) =>
    {
      console.log(data)
    })
  }
  


  ngOnInit(): void {
  }

}
