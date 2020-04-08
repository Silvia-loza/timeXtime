import { Component, OnInit, TemplateRef } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { PeticionesService } from 'src/app/shared/peticiones.service';
import {MuroService} from 'src/app/shared/muro.service'
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Peticiones } from 'src/app/models/peticiones';
import { Usuarios } from 'src/app/models/usuarios';
import { Petusu } from 'src/app/models/petusu';


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

  completarSolicitud(peticion:Peticiones, petUsu:Petusu){

    this.apiService2.putCompletada(peticion).subscribe((data) =>
    {

      this.mostrarPeticionesPub()
    })

    let usuarioCreador = new Usuarios()

    usuarioCreador.id_usuario = this.user[0].id_usuario
    usuarioCreador.monedas = peticion.precio

    console.log(usuarioCreador.id_usuario)
    console.log(usuarioCreador.monedas)
    
    this.apiService2.putCompletadaRestaCreador(usuarioCreador).subscribe((data) =>
    {

      console.log(data)

      this.apiService.getUsuario(this.user[0].email, this.user[0].contrasena).subscribe((data) =>
      {

        this.apiService.usuarioLogin = data
      })
    })

    let usuarioSolicitante = new Usuarios()

    usuarioSolicitante.id_usuario = petUsu.id_solicitante
    usuarioSolicitante.monedas = peticion.precio

    console.log(usuarioSolicitante.id_usuario)
    console.log(usuarioSolicitante.monedas)

    this.apiService2.putCompletadaSumaSolicitante(usuarioSolicitante).subscribe((data) =>
    {

      console.log(data)
    })
  }

  ngOnInit(): void {
  }

}
