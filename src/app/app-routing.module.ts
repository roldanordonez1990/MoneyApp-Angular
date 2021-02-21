import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { CometidosUsuarioComponent } from './components/cometidos-usuario/cometidos-usuario.component';
import { RegistroNuevoUsuarioComponent } from './components/registro-nuevo-usuario/registro-nuevo-usuario.component';
import { DatosUsuarioUpdateComponent } from './components/datos-usuario-update/datos-usuario-update.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginUsuarioComponent },
  { path: 'listadoCometidos', component: CometidosUsuarioComponent },
  { path: 'registroUsuario', component:  RegistroNuevoUsuarioComponent},
  { path: 'updateDatosUsario', component:  DatosUsuarioUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
