import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {

  public valoracion: number
  public numero_valoraciones: number

  constructor(private apiService:LoginService) {

    this.valoracion = this.apiService.usuarioLogin[0].valoracion
    this.numero_valoraciones = this.apiService.usuarioLogin[0].numero_valoraciones

    
   }

  ngOnInit(): void {
  }

}
