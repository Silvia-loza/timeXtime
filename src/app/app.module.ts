import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { HeadComponent } from './componentes/head/head.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PeticionesComponent } from './componentes/peticiones/peticiones.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    HeadComponent,
    FooterComponent,
    PeticionesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
