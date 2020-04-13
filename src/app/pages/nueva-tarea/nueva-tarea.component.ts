import { Component, OnInit } from '@angular/core';
import { NuevatareaService } from 'src/app/shared/nuevatarea.service';
import { Peticiones } from 'src/app/models/peticiones';
import { LoginService } from 'src/app/shared/login.service';
import { Petusu } from 'src/app/models/petusu';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {
  public categoria: String
  public peticiones1= new Peticiones()

  constructor(private apiService: NuevatareaService, private apiService2: LoginService) {

    this.peticiones1
  }

  onSubmit(form){
    console.log(form.value)
  }

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
      
      
      this.apiService.getUltimaPeticion().subscribe((data) =>
      {
      
        let newPetUsu = new Petusu()

        newPetUsu.id_peticion = data[0].id_peticion
        newPetUsu.id_creador = this.apiService2.usuarioLogin[0].id_usuario

        this.apiService.postPetUsu(newPetUsu).subscribe((data)=>
        {

          console.log(data)
        })

      })

      this.apiService.putSumaPub(this.apiService2.usuarioLogin[0]).subscribe((data) =>{})
    })

    
  }





  ngOnInit(): void {
  }

}
