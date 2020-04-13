import { Component, OnInit } from '@angular/core';
import { MuroService } from 'src/app/shared/muro.service';
import { LoginService } from 'src/app/shared/login.service';
import { OfertaPerfilService } from 'src/app/shared/oferta-perfil.service';
import { Peticiones } from 'src/app/models/peticiones';
import { Chat } from 'src/app/models/chat';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/shared/header.service';

@Component({
  selector: 'app-oferta-perfil',
  templateUrl: './oferta-perfil.component.html',
  styleUrls: ['./oferta-perfil.component.css']
})
export class OfertaPerfilComponent implements OnInit {

  public peticion:object
  public usuario: object
  public petUsu: object
  public userLogin: object
  public chats: any
  public yaExisteChat: boolean = false
  constructor(private apiService:MuroService, private apiService2:LoginService, private apiService3:OfertaPerfilService, private router: Router, private apiService4:HeaderService) { 

    this.peticion = this.apiService.peticion
    this.usuario = this.apiService.usuario
    this.petUsu = this.apiService.petUsu
    this.userLogin = this.apiService2.usuarioLogin
    this.chats = this.apiService4.chats
    
  }

  solicitar(){

    this.apiService3.putSolicitarPeticiones(this.peticion[0]).subscribe((data) =>
    {

      this.apiService.getPeticion(this.peticion[0].id_peticion).subscribe((data) =>
      {

        this.peticion = data
      })
    })

    this.apiService3.putSolicitarPetUsu(this.userLogin[0].id_usuario, this.petUsu[0]).subscribe((data) =>
    {

      console.log(data)
    })

  }

  iniciarChat(){

    let chat = new Chat()

    chat.id_usuario1 = this.userLogin[0].id_usuario
    chat.nombre_usuario1 = this.userLogin[0].nombre_usuario
    chat.foto1 = this.userLogin[0].foto
    chat.id_usuario2 = this.usuario[0].id_usuario
    chat.nombre_usuario2 = this.usuario[0].nombre_usuario
    chat.foto2 = this.usuario[0].foto

    

    for(let i = 0; i < this.chats.length; i++){

      if( (chat.id_usuario1 === this.chats[i].id_usuario1 || chat.id_usuario1 === this.chats[i].id_usuario2) && (chat.id_usuario2 === this.chats[i].id_usuario1 || chat.id_usuario2 === this.chats[i].id_usuario2) ){

        
        this.yaExisteChat = true
      } 
    }

    if(this.yaExisteChat){

      this.router.navigate(['/', 'chat'])

    } else {

      this.apiService3.postIniciarChat(chat).subscribe((data) =>{

          

        this.apiService4.getChats(this.userLogin[0].id_usuario).subscribe((data) =>
        {
          this.apiService4.chats = data
  
          this.router.navigate(['/', 'chat'])
  
        })
      })
    }

    
  }



  ngOnInit(): void {
  }

}
