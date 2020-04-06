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
    
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
