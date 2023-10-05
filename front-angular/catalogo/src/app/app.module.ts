import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SearchComponent } from './pages/search/search.component';
import { ItemComponent } from './pages/item/item.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { ProductoComponent } from './pages/producto/producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgPipesModule} from 'ngx-pipes'
import { LoginComponent } from './pages/login/login.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatSidenavModule} from '@angular/material/sidenav';
import { UsuariosService } from './service/usuarios.service';
import { ProductosService } from './service/productos.service';
import { LoginService } from './service/login.service';
import { AuthInterceptorService } from './service/auth-interceptor.service';
import { AuthGuardService } from './service/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    SearchComponent,
    ItemComponent,
    ProductoComponent,
    LoginComponent,
    CrearUsuarioComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxPaginationModule,
    NgPipesModule,
    MatButtonToggleModule,
    MatSidenavModule,
  ],
  providers: [UsuariosService, ProductosService, LoginService, 
              AuthInterceptorService, AuthGuardService,
            {
              provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptorService,
                multi: true
            }],
  bootstrap: [AppComponent]
})
export class AppModule { }
