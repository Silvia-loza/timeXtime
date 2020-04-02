import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private apiService:HeaderService, private router:Router) { }

  

  mostrarPeticiones(){

    this.apiService.getPeticiones().subscribe((data) =>
    {

      this.apiService.peticiones = data

      this.router.navigate(['/', 'muro'])
    })
  }

  ngOnInit(): void {
  }

}
