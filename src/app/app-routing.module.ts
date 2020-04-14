import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuroComponent } from './pages/muro/muro.component';
import { OfertaPerfilComponent } from './pages/oferta-perfil/oferta-perfil.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NuevaTareaComponent } from './pages/nueva-tarea/nueva-tarea.component';
import { PeticionesComponent } from './pages/peticiones/peticiones.component';
import { EditTareaComponent } from './pages/edit-tarea/edit-tarea.component';
import { ChatComponent } from './pages/chat/chat.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


const routes: Routes = [
  {path:"muro", component: MuroComponent},
  {path:"perfil", component: PerfilComponent},
  {path:"nueva-tarea", component: NuevaTareaComponent},
  {path:"peticiones", component: PeticionesComponent},
  {path:"oferta", component: OfertaPerfilComponent},
  {path:"editar", component: EditTareaComponent},
  {path:"", component: RegistroComponent},
  {path:"chat", component: ChatComponent},
  {path:"cookies", component: CookiesComponent},
  {path:"", redirectTo:"/registro", pathMatch:"full"},
  {path:"acerca-de", component: AcercaDeComponent},
  {path:"contacto", component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
