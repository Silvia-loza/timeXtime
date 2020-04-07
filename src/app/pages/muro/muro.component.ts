import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MuroService } from 'src/app/shared/muro.service';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/shared/header.service';
import { LoginService } from 'src/app/shared/login.service';
import { OfertaPerfilService } from 'src/app/shared/oferta-perfil.service';

@Component({
  selector: 'app-muro',
  templateUrl: './muro.component.html',
  styleUrls: ['./muro.component.css']
})

export class MuroComponent implements OnInit {

  modalRef: BsModalRef

  public peticiones: object
  public indice: number

  public elID:number

  public categoria: String

  public petUsu: object

  public userLogin: object


  constructor(private modalService: BsModalService, private apiService:MuroService, private router: Router, private apiService2:OfertaPerfilService, private apiService3:LoginService){

    this.peticiones = this.apiService3.peticiones
    this.petUsu = this.apiService3.petUsu
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

    this.apiService.getPeticionesFiltros(this.categoria, precio, localizacion, fecha_finalizacion).subscribe((data) =>
    {
      this.peticiones = data

    })
  }

  mostrarPeticion(indice){

    this.indice = indice

    this.elID = this.peticiones[this.indice].id_peticion

    this.apiService.getPeticion(this.elID).subscribe((data) =>
    {

      this.apiService.peticion = data

      this.apiService.getUsuario(this.elID).subscribe((data2) =>
      {
        this.apiService.usuario = data2

        this.router.navigate(['/', 'oferta'])
 
      })
    })

    this.apiService.getPetUsu(this.elID).subscribe((data) =>
    {
      this.apiService.petUsu = data
    })

    
  }

  solicitar(indice:number){

    this.apiService2.putSolicitarPeticiones(this.peticiones[indice]).subscribe((data) =>
    {

      this.apiService3.getPeticiones().subscribe((data) =>
      {

        this.peticiones = data

        this.apiService3.getPetUsu().subscribe((data) =>
        {

          this.petUsu = data
        })
      })
    })

    this.apiService2.putSolicitarPetUsu(this.userLogin[0].id_usuario, this.petUsu[indice]).subscribe((data) =>
    {

      console.log(data)
    })

  }


  


  ngOnInit(): void {
  }

}
