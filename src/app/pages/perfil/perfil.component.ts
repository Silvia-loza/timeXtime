import { Component, OnInit } from '@angular/core';
import { Usuarios} from '../../models/usuarios';
import { PerfilService} from '../../shared/perfil.service'
import { FileUploadService} from '../../shared/file-upload.service'
import { LoginService } from '../../shared/login.service'
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/shared/header.service';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers:  [ PerfilService ]
})




export class PerfilComponent implements OnInit {

  public perfil : Object
  public fotoUsu : Object
  public mostrarP : Object
  public perfilForm = new Usuarios ()
  
  constructor(private apiService: PerfilService, private apiService2: LoginService) { 
    this.perfil = this.apiService2.usuarioLogin
    this.perfilForm
  }

  onSubmit(perfilForm){
    console.log(perfilForm.value)
  }
    
  fileToUpload: File = null;
  fileUploadService: FileUploadService;

  editarPerfil(nombre_usuario: String, nombre: String, primer_apellido: String, segundo_apellido: String,  contrasena: String, telefono: number, email: String, biografia: String, foto: String)
      {
      
       var nuevoPerfil = new Usuarios();
      
       if(foto === "")
           {

            nuevoPerfil.foto = this.perfil[0].foto
            } else {
          
            nuevoPerfil.foto= '..\\..\\assets\\' + foto.slice(foto.lastIndexOf('\\') + 1);
            } 

       nuevoPerfil.id_usuario = this.apiService2.usuarioLogin[0].id_usuario;
                                     
       nuevoPerfil.nombre_usuario = nombre_usuario;
       nuevoPerfil.nombre = nombre;
       nuevoPerfil.primer_apellido= primer_apellido;
       nuevoPerfil.segundo_apellido = segundo_apellido;
       nuevoPerfil.contrasena = contrasena;
       nuevoPerfil.telefono = telefono;
       nuevoPerfil.email = email;
       nuevoPerfil.biografia = biografia;
       //this.fileToUpload = file
                                    
       this.apiService.putPefil(nuevoPerfil).subscribe((data) =>
       {
           this.perfil = data
       })


      this.mostrarPerfil()

  }

mostrarPerfil() {
    this.apiService.getPerfil(this.apiService2.usuarioLogin[0].id_usuario).subscribe((data) => {
        this.apiService.perfilS = data
        
      //this.apiService2.usuarioLogin = data (este es el que está en git)

      console.log(data)
    })}





handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
}

uploadFileToActivity() {
  this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
    // do something, if upload success
    console.log("hola foto subida")
    }, error => {
      console.log(error);
      console.log('Adios tienes un error')
    });
}


  ngOnInit(): void  {
  
  }

}
