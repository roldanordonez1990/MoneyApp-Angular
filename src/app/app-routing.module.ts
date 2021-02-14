import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { CometidosUsuarioComponent } from './components/cometidos-usuario/cometidos-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginUsuarioComponent },
  { path: 'listadoCometidos', component: CometidosUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
