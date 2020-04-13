import { Component, OnInit } from '@angular/core';
import {Peticiones} from '../../models/peticiones'
import {NuevatareaService} from 'src/app/shared/nuevatarea.service';
import {MuroService} from 'src/app/shared/muro.service'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'



@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.component.html',
  styleUrls: ['./edit-tarea.component.css']
})
export class EditTareaComponent implements OnInit {

  public categoria: String
  public peticion:object
  public formGroup: FormGroup
  public peticiones= new Peticiones()

  constructor(private apiService: NuevatareaService,  private apiService1:MuroService, private formBuilder: FormBuilder) { 


  this.buildForm();

  this.peticion = this.apiService1.peticion

  this.peticiones
  
  }
  

  onSubmit(form){
    console.log(form.value)
  }


  categorias(categoria:String){
    this.categoria = categoria
  }


  public edit(){

    const edit = this.formGroup.value;
    console.log(edit)

  }




  private buildForm(){

    this.formGroup = this.formBuilder.group({
  
      titulo:[, [Validators.required]],
      precio:[, Validators.required],
      zona:[, Validators.required],
      fecha:[, Validators.required],
      descripcion:[, Validators.required],
    })
  } 

  editarPeticion(foto:String, titulo:String, precio:number, localizacion:string, fecha_finalizacion: Date, descripcion: String)
   {
    let editarPeticion = new Peticiones();

    if(foto === "" ){
      editarPeticion.foto = this.peticion[0].foto
    } else {
      editarPeticion.foto= '..\\..\\assets\\' + foto.slice(foto.lastIndexOf('\\') + 1);
    }

    editarPeticion.id_peticion = this.peticion[0].id_peticion
    editarPeticion.categoria=this.categoria
  

    
    editarPeticion.titulo=titulo
    editarPeticion.precio=precio
    editarPeticion.localizacion=localizacion
    editarPeticion.fecha_finalizacion=fecha_finalizacion
    editarPeticion.descripcion=descripcion
    editarPeticion.estado = this.peticion[0].estado
    


    


    this.apiService.putTarea(editarPeticion).subscribe((data) =>
    {
      console.log(data)
    })
  }

  


  ngOnInit(): void {
  }

}
