import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { HeaderService } from 'src/app/shared/header.service';
import { Chat } from 'src/app/models/chat';
import { ChatService } from 'src/app/shared/chat.service';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public chats: object
  public indice: number
  public chat:Chat
  public userLogin:Usuarios

  constructor(private apiService:LoginService, private apiService2:HeaderService, private apiService3:ChatService) { 

    this.chats = this.apiService2.chats
    this.userLogin = this.apiService.usuarioLogin[0]

  }

  seleccionaChat(chat:Chat){

    this.chat = chat

    this.apiService3.getChatActualizado(this.chat.id_chat).subscribe((data) =>
    {
      this.chat = data[0]
    })
  }

  enviaMensaje(texto: String){

    let nombre = this.userLogin.nombre_usuario
    let nuevoChat = new Chat()

    nuevoChat.id_chat = this.chat.id_chat
    nuevoChat.id_usuario1 = this.chat.id_usuario1
    nuevoChat.id_usuario2 = this.chat.id_usuario2
    nuevoChat.texto = nombre + ": " + texto + '\n'

    this.apiService3.putChat(nuevoChat).subscribe((data) =>
    {

      this.apiService3.getChatActualizado(nuevoChat.id_chat).subscribe((data) =>
      {

        this.chat = data[0]
      })
    })
  }

  ngOnInit(): void {
  }

}
