import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginService } from 'src/app/shared/login.service';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { MessageServiceService } from './../../shared/message-service.service';
import { FormGroup,Validators,FormBuilder} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';


import { MustMatch } from './_helpers/must-match.validator';
import { Peticiones } from 'src/app/models/peticiones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],

})

export class RegistroComponent implements OnInit {

  modalRef: BsModalRef;
  public nuevoUsuario = new Usuarios()
  registerForm:FormGroup; 
  submitted = false;

  public nombreRepetido: boolean = false
  public emailRepetido: boolean = false

  constructor(private modalService: BsModalService, private apiService:LoginService, private router:Router, public _MessageService: MessageServiceService, private formBuilder: FormBuilder, private toastr: ToastrService) {
    
    this.nuevoUsuario
  }

showToaster(){
 
    this.toastr.error("Nombre de usuario ya registrado, por favor introduce otro nombre")

}

showToaster1(){
  this.toastr.error("Email ya registrado, por favor, introduce otro email")
}

showToaster2(){
  this.toastr.error("Email o contraseña incorrectos")
}

showToaster3(){
  this.toastr.success("¡Te has registrado satisfactoriamente!")
}

  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {

      })
    }


  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template)
  }

  getLogin(email:String, contrasena:String){


    this.apiService.getPeticiones().subscribe((data) =>
    {
      this.apiService.peticiones = data

      this.apiService.getUsuario(email, contrasena).subscribe((data) =>
      {
      
        this.apiService.usuarioLogin = data
      
        if(this.apiService.usuarioLogin[0] != undefined){
        
          this.router.navigate(['/', 'muro'])
        
          
        } else {
        
          this.showToaster2()
        }
      
      })
    })


    

    let expirada = new Peticiones()

    expirada.estado = "expirada"
    this.apiService.putExpirada(expirada).subscribe((data) =>{})

  }

  insertarUsuario(nombre_usuario, email, contrasena){

    let usuario = new Usuarios

    usuario.nombre_usuario = nombre_usuario
    usuario.email = email
    usuario.contrasena = contrasena
  
    this.apiService.postUsuario(usuario).subscribe((data)=>
    {
      
      let texto: String

      texto = Object.values(data).toString()

      if(texto.includes("'nombre_usuario'")){

        this.nombreRepetido = true
        this.showToaster()
        
      } else if(texto.includes("'email'")){

        this.emailRepetido = true
        this.showToaster1()

      } else if(this.emailRepetido === false && this.nombreRepetido === false){

        this.showToaster3()
        this.modalRef.hide()

      }   

      console.log(this.nombreRepetido)
      console.log(this.emailRepetido)

    });

    this.nombreRepetido = false
    this.emailRepetido = false
  }
  
  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      nombre_usuario: [, Validators.required],
        email: [, [ Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      }, {
        validator: MustMatch('password', 'confirmPassword')
    });
}
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }

    console.log('Registrado')
}
}

