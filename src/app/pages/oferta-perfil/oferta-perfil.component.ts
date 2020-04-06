import { Component, OnInit } from '@angular/core';
import { MuroService } from 'src/app/shared/muro.service';
import { LoginService } from 'src/app/shared/login.service';

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
  constructor(private apiService:MuroService, private apiService2:LoginService) { 

    this.peticion = this.apiService.peticion
    this.usuario = this.apiService.usuario
    this.petUsu = this.apiService.petUsu
    this.userLogin = this.apiService2.usuarioLogin

    console.log(this.userLogin[0].id_usuario)
    console.log(this.apiService.petUsu[0].id_creador)
    
  }

  



  ngOnInit(): void {
  }

}
