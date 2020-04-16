import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MuroService } from 'src/app/shared/muro.service';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/shared/header.service';
import { LoginService } from 'src/app/shared/login.service';
import { OfertaPerfilService } from 'src/app/shared/oferta-perfil.service';
import { Peticiones } from 'src/app/models/peticiones';

@Component({
  selector: 'app-muro',
  templateUrl: './muro.component.html',
  styleUrls: ['./muro.component.css']
})

export class MuroComponent implements OnInit {

  modalRef: BsModalRef

  public peticiones: object

  public elID:number

  public categoria: String

  public userLogin: object


  constructor(private modalService: BsModalService, private apiService:MuroService, private router: Router, private apiService2:OfertaPerfilService, private apiService3:LoginService, private apiService4:HeaderService){

    this.peticiones = this.apiService3.peticiones
    this.userLogin = this.apiService3.usuarioLogin
  }

  openModal(template: TemplateRef<any>){

    this.modalRef = this.modalService.show(template)
  }

  

  mostarPeticionesBusqueda(descripcion: String){

    this.apiService.getPeticionesBusqueda(descripcion).subscribe((data) =>
    {

      this.peticiones = data

    })
  }

  
  
  categorias(categoria: String){

    this.categoria = categoria
  }

  mostrarPeticionesFiltros(precio: number, localizacion: String, fecha_finalizacion: Date){

    if(precio === undefined){

      precio = 0
    }

    if(this.categoria === undefined){

      this.categoria = "nocategoria"
    }

    if(fecha_finalizacion.toString() === ""){

      let newFecha = new Date("2099-12-12")

      fecha_finalizacion = newFecha
      console.log(newFecha)
    }

    
    this.apiService.getPeticionesFiltros(this.categoria, precio, localizacion, fecha_finalizacion).subscribe((data) =>
    {

      this.categoria = "nocategoria"
      this.peticiones = data

    })
    
  }

  mostrarPeticion(indice){

    this.elID = this.peticiones[indice].id_peticion

    this.apiService.getPeticion(this.elID).subscribe((data) =>
    {

      this.apiService.peticion = data

      this.apiService.getUsuario(this.elID).subscribe((data2) =>
      {
        this.apiService.usuario = data2

        this.router.navigate(['/', 'oferta'])
 
      })
    })

    this.apiService4.getChats(this.userLogin[0].id_usuario).subscribe((data) =>{

      this.apiService4.chats = data
    })

  }

  solicitar(indice:number){

    this.peticiones[indice].id_solicitante = this.userLogin[0].id_usuario

    this.apiService2.putSolicitarPeticion(this.peticiones[indice]).subscribe((data) =>
    {

      this.apiService2.putSumaPeticionSol(this.userLogin[0]).subscribe((data) =>{})

      this.apiService3.getPeticiones().subscribe((data) =>
      {

        this.peticiones = data

      })
    })

  }


  ngOnInit(): void {
  }

}
