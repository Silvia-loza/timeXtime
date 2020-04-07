import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/header.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/login.service';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  public user: object

  constructor(private apiService:HeaderService, private router:Router, private apiService2:LoginService) { 

    this.user = this.apiService2.usuarioLogin

  }

  

  mostrarPeticiones(){

    this.apiService2.getPeticiones().subscribe((data) =>
    {

      this.apiService2.peticiones = data

      
    })

    this.apiService2.getPetUsu().subscribe((data) =>
    {
      this.apiService2.petUsu = data

      this.router.navigate(['/', 'muro'])

    })
  }
  mostrarPerfil(){


    this.apiService2.getPerfil().subscribe((data) =>
    {
      this.apiService.peticiones = data
    })
  }

  ngOnInit(): void {
  }

}
