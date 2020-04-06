import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { PeticionesService } from 'src/app/shared/peticiones.service';
import {MuroService} from 'src/app/shared/muro.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class PeticionesComponent implements OnInit {

  public user:object
  public peticiones: object
  public petUsu: object

  constructor(private apiService:LoginService, private apiService2:PeticionesService, private apiService1:MuroService, private router: Router, private apiService3:LoginService) { 

    this.user = this.apiService.usuarioLogin
  }

  mostrarPeticionesPub(){

    this.apiService2.getPeticionesPub(this.user[0].id_usuario).subscribe((data) =>
    {
      this.peticiones = data

    })

    this.apiService2.getPetUsuPub(this.user[0].id_usuario).subscribe((data) =>
    {

      this.petUsu = data
    })
  }

  mostrarPeticionesSol(){

    this.apiService2.getPeticionesSol(this.user[0].id_usuario).subscribe((data) =>
    {

      this.peticiones = data
    })

    this.apiService2.getPetUsuSol(this.user[0].id_usuario).subscribe((data) =>
    {

      this.petUsu = data
    })
  }

  ngOnInit(): void {
  }

}
