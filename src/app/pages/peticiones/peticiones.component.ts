import { Component, OnInit, TemplateRef } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { PeticionesService } from 'src/app/shared/peticiones.service';
import {MuroService} from 'src/app/shared/muro.service'
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Peticiones } from 'src/app/models/peticiones';


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

  modalRef: BsModalRef

  constructor(private apiService:LoginService, private apiService2:PeticionesService, private apiService1:MuroService, private router: Router, private modalService: BsModalService) { 

    this.user = this.apiService.usuarioLogin
  }

  mostrarPeticionesPub(){

    this.apiService2.getPeticionesPub(this.user[0].id_usuario).subscribe((data) =>
    {
      this.peticiones = data

      this.apiService2.getPetUsuPub(this.user[0].id_usuario).subscribe((data) =>
      {

        this.petUsu = data
      })

    })

    
  }

  mostrarPeticionesSol(){

    this.apiService2.getPeticionesSol(this.user[0].id_usuario).subscribe((data) =>
    {

      this.peticiones = data

      this.apiService2.getPetUsuSol(this.user[0].id_usuario).subscribe((data) =>
      {

        this.petUsu = data
      })
    })

    
  }

  mostrarPeticion(indice){

    this.indice = indice

    this.elID = this.peticiones[this.indice].id_peticion

    this.apiService1.getPeticion(this.elID).subscribe((data) =>
    {

      this.apiService1.peticion = data

      this.router.navigate(['/', 'editar'])

    })
  }

  openModal(template: TemplateRef<any>){

    this.modalRef = this.modalService.show(template)
  }

  aceptarSolicitud(peticion:Peticiones){

    this.apiService2.putAceptar(peticion).subscribe((data) =>
    {

      this.mostrarPeticionesPub()
    })
  }

  rechazarSolicitud(peticion:Peticiones){

    this.apiService2.putRechazar(peticion).subscribe((data) =>
    {

      this.mostrarPeticionesPub()
    })

    this.apiService2.putRechazarPetUsu(peticion).subscribe((data) =>
    {
      
    })
  }

  realizarSolicitud(peticion:Peticiones){

    this.apiService2.putRealizada(peticion).subscribe((data) =>
    {

      this.mostrarPeticionesSol()
    })
  }

  ngOnInit(): void {
  }

}
