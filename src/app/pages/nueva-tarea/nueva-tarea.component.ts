import { Component, OnInit } from '@angular/core';
import { NuevatareaService } from 'src/app/shared/nuevatarea.service';
import { Peticiones } from 'src/app/models/peticiones';
import { LoginService } from 'src/app/shared/login.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {
  public categoria: String

  public peticiones1 = new Peticiones()

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

    if(this.categoria === undefined){

      peticion.categoria = "servicios"
    } else {

      peticion.categoria=this.categoria

    }
    
    if(foto === "" && peticion.categoria === "mascotas"){

      peticion.foto = "../../../assets/Mascotas.jpg"

    } else if(foto === "" && peticion.categoria === "clases"){

      peticion.foto = "../../../assets/Professor.jpg"
    } else if (foto === "" && peticion.categoria === "servicios"){

      peticion.foto = "../../../assets/servicios.jpg"
    } else if (foto === "" && peticion.categoria === "recados"){

      peticion.foto = "../../../assets/recadosIIIII.jpg"
    } else {

      peticion.foto= '..\\..\\assets\\' + foto.slice(foto.lastIndexOf('\\') + 1);
    }

    peticion.titulo=titulo
    peticion.localizacion=localizacion
    peticion.precio=precio
    peticion.fecha_finalizacion=fecha_finalizacion
    peticion.descripcion=descripcion
    peticion.id_creador = this.apiService2.usuarioLogin[0].id_usuario

    this.apiService.postTarea(peticion).subscribe((data) =>
    {
      this.apiService.putSumaPub(this.apiService2.usuarioLogin[0]).subscribe((data) =>{})
    })

  }





  ngOnInit(): void {
  }

}
