import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginService } from 'src/app/shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  modalRef: BsModalRef

  constructor(private modalService: BsModalService, private apiService:LoginService, private router:Router){}

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template)
  }

  getLogin(email:String, contrasena:String){

    this.apiService.getUsuario(email, contrasena).subscribe((data) =>
    {

      
      this.apiService.usuarioLogin = data

      

      if(this.apiService.usuarioLogin[0] != undefined){

        this.router.navigate(['/', 'muro'])

        

      } else {

        console.log("Datos incorrectos")
      }

    })
    
  }

  ngOnInit(): void {
  }

}
