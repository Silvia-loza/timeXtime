import { Component, OnInit } from '@angular/core';
import { MuroService } from 'src/app/shared/muro.service';
import { LoginService } from 'src/app/shared/login.service';
import { OfertaPerfilService } from 'src/app/shared/oferta-perfil.service';
import { Peticiones } from 'src/app/models/peticiones';
import { Chat } from 'src/app/models/chat';

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
  constructor(private apiService:MuroService, private apiService2:LoginService, private apiService3:OfertaPerfilService) { 

    this.peticion = this.apiService.peticion
    this.usuario = this.apiService.usuario
    this.petUsu = this.apiService.petUsu
    this.userLogin = this.apiService2.usuarioLogin
    
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

    this.apiService3.postIniciarChat(chat).subscribe((data) =>{})
  }



  ngOnInit(): void {
  }

}
