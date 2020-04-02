import { Component, OnInit } from '@angular/core';
import { MuroService } from 'src/app/shared/muro.service';

@Component({
  selector: 'app-oferta-perfil',
  templateUrl: './oferta-perfil.component.html',
  styleUrls: ['./oferta-perfil.component.css']
})
export class OfertaPerfilComponent implements OnInit {

  public peticion:object
  public usuario: object
  constructor(private apiService:MuroService) { 

    this.peticion = this.apiService.peticion
    this.usuario = this.apiService.usuario
    
  }



  ngOnInit(): void {
  }

}
