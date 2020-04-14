import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HeadComponent } from './pages/head/head.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PeticionesComponent } from './pages/peticiones/peticiones.component';
import { MuroComponent } from './pages/muro/muro.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OfertaPerfilComponent } from './pages/oferta-perfil/oferta-perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NuevaTareaComponent } from './pages/nueva-tarea/nueva-tarea.component';
import {EditTareaComponent} from './pages/edit-tarea/edit-tarea.component';
import { ValoracionComponent } from './pages/valoracion/valoracion.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ChatPipe } from './pipes/chat.pipe'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MessageServiceService } from "./shared/message-service.service";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    HeadComponent,
    FooterComponent,
    PeticionesComponent,
    MuroComponent,
    OfertaPerfilComponent,
    RegistroComponent,
    NuevaTareaComponent,
    EditTareaComponent,
    ValoracionComponent,
    ChatComponent,
    ChatPipe,
    CookiesComponent,
    
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
    AcercaDeComponent,

  ],
  providers: [MessageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
