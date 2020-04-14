import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginService } from 'src/app/shared/login.service';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { MessageServiceService } from './../../shared/message-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],

})



export class RegistroComponent implements OnInit {

  modalRef: BsModalRef;
  public nuevoUsuario = new Usuarios()

  constructor(private modalService: BsModalService, private apiService:LoginService, private router:Router, public _MessageService: MessageServiceService) {

     this.nuevoUsuario
  }

  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {

      })
    }
  

  onSubmit(form){
    
    console.log(form.value)
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template)
  }

  getLogin(email:String, contrasena:String){


    this.apiService.getPeticiones().subscribe((data) =>
    {
      this.apiService.peticiones = data
    })

    this.apiService.getPetUsu().subscribe((data) =>
    {
      this.apiService.petUsu = data

    })

    this.apiService.getUsuario(email, contrasena).subscribe((data) =>
    {

      this.apiService.usuarioLogin = data

      if(this.apiService.usuarioLogin[0] != undefined){

        this.router.navigate(['/', 'muro'])
        
      } else {

        console.log("Datos incorrectos")
      }

    })

  }

  insertarUsuario(nombre_usuario, email, contrasena){

    let usuario = new Usuarios

    usuario.nombre_usuario = nombre_usuario
    usuario.email = email
    usuario.contrasena = contrasena

    this.apiService.postUsuario(usuario).subscribe((data)=>
    
    {
    
      console.log(data)
    });
  
  }



  ngOnInit(): void {
  }

}
