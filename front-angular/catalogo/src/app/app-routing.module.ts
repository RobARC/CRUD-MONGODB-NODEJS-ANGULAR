import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ItemComponent } from './pages/item/item.component';
import { ProductoComponent } from './pages/producto/producto.component';


const routes: Routes = [
  {path: 'home', component: PortafolioComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'productos', component: ProductoComponent},
  {path: 'producto/:id', component: ProductoComponent},

  //{path: 'search/:termino', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
