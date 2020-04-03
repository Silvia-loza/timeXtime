import { Component } from '@angular/core';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'time';

  public user:object

  public isHidden: boolean

  constructor(public apiService:LoginService){

    this.user = this.apiService.usuarioLogin

    

    

    
  }

  


}
