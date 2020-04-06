import { Component, OnInit } from '@angular/core';
import { Usuarios} from '../../models/usuarios';
import { PerfilService} from '../../shared/perfil.service'
import { FileUploadService} from '../../shared/file-upload.service'
import {LoginService} from '../../shared/login.service'


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers:  [ PerfilService ]
})
export class PerfilComponent implements OnInit {
  public usuario: Usuarios
  public perfil : Object
  
  constructor(private apiService: PerfilService) { }
    
  fileToUpload: File = null;
  LoginService: LoginService;
  fileUploadService: FileUploadService;

  editarPerfil(id_usuario:number, nombre_usuario: String, nombre: String, primer_apellido: String, segundo_apellido: String,  contrasena: String, telefono: number, email: String, biografia: String, foto: String)
   {

    let nuevoPerfil = new Usuarios();
    //nuevoPerfil.id_usuario = this.LoginService[0];
    nuevoPerfil.id_usuario = id_usuario;
    nuevoPerfil.nombre_usuario = nombre_usuario;
    nuevoPerfil.nombre = nombre;
    nuevoPerfil.primer_apellido= primer_apellido;
    nuevoPerfil.segundo_apellido = segundo_apellido;
    nuevoPerfil.contrasena = contrasena;
    nuevoPerfil.telefono = telefono;
    nuevoPerfil.email = email;
    nuevoPerfil.biografia = biografia;
    nuevoPerfil.foto = '..\\..\\assets\\' + foto.slice(foto.lastIndexOf('\\') + 1);
    
    //this.fileToUpload = file
  
  
   
  
    
    this.apiService.putPefil(nuevoPerfil).subscribe((data) =>
    {
      console.log(data)
      //this.uploadFileToActivity()
    })
  }
  
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

  mostrarPerfil(id_usuario: number)
  {
   

    this.apiService.getPerfil(id_usuario).subscribe((data) =>
    {
      this.perfil = data;
    })
  }
  onFotoSelected(event) {
        console.log(event)
  }

  ngOnInit(): void {
  }

}
