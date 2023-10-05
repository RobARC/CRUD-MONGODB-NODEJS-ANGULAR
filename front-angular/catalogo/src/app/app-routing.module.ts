import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ItemComponent } from './pages/item/item.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { LoginComponent } from './pages/login/login.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { SearchComponent } from './pages/search/search.component';
import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: PortafolioComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'productos', component: ProductoComponent, canActivate: [AuthGuardService]},
  {path: 'producto/:id', component: ProductoComponent},
  {path: 'buscar/:termino', component: SearchComponent},
  {path: 'login', component: LoginComponent}, 
  {path: 'registro', component: CrearUsuarioComponent, canActivate: [AuthGuardService]}, 

  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
