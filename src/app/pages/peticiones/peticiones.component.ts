import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class PeticionesComponent implements OnInit {

  public user:object

  constructor(private apiService:LoginService) { 

    this.user = this.apiService.usuarioLogin
  }

  ngOnInit(): void {
  }

}
