import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { CometidosUsuarioComponent } from './components/cometidos-usuario/cometidos-usuario.component';
import { RegistroNuevoUsuarioComponent } from './components/registro-nuevo-usuario/registro-nuevo-usuario.component';
import { DatosUsuarioUpdateComponent } from './components/datos-usuario-update/datos-usuario-update.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TerminosLegalesComponent } from './components/terminos-legales/terminos-legales.component';




const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginUsuarioComponent },
  { path: 'listadoCometidos', component: CometidosUsuarioComponent },
  { path: 'registroUsuario', component:  RegistroNuevoUsuarioComponent},
  { path: 'updateDatosUsario', component:  DatosUsuarioUpdateComponent},
  { path: 'contacto', component:  ContactoComponent},
  { path: 'terminosLegales', component:  TerminosLegalesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
