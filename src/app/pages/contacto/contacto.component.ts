import { Component, OnInit } from '@angular/core';
import { MensajeContactoService } from './../../shared/mensaje-contacto.service';
import { FormGroup } from "@angular/forms"
import Swal from 'sweetalert2';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  registerForm:FormGroup; 
  

  constructor(public _MensajeContactoService : MensajeContactoService) { }


  contactForm(form) {
    this._MensajeContactoService.sendMessage(form).subscribe(() => {
      Swal.fire({
        icon: 'success',
        text: '"Petición enviada correctamente"'
      }) 
    });
    }
   

    
  ngOnInit(): void {
  }

}
