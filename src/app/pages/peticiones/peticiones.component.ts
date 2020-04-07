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
  

  public indice: number

  public elID:number

  public categoria: String



  public userLogin: object

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

  mostrarPeticion(indice){

    this.indice = indice

    this.elID = this.peticiones[this.indice].id_peticion

    this.apiService1.getPeticion(this.elID).subscribe((data) =>
    {

      this.apiService1.peticion = data

      this.apiService1.getUsuario(this.elID).subscribe((data2) =>
      {
        this.apiService1.usuario = data2

        this.router.navigate(['/', 'editar'])
 
      })
    })

    this.apiService1.getPetUsu(this.elID).subscribe((data) =>
    {
      this.apiService.petUsu = data
    })

    
  }

  ngOnInit(): void {
  }

}
