import { Component } from '@angular/core';
import { ProductosService } from '../../service/productos.service';
import { Router } from '@angular/router';
import {ScanPipe } from 'ngx-pipes';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  productos:any[] = []
  page!:number;
  rol: any;

  constructor(private productosService: ProductosService,
              private loginService: LoginService,          
              private router: Router){}

              
  ngOnInit() {
    
    this.obtenerProductos();
    this.loginService.triggerRefresh.subscribe(() => {
      this.ngOnInit();
      
     
    });
    
   
  }

  async obtenerProductos(){
    (await this.productosService.getProductos()).subscribe((productos: any) => {
      this.productos = productos
   
     
    });
  }

  productoDetalle(id : string){
    this.router.navigate(['/item', id]);
  }

  GetRole() {
     const item = window.localStorage.getItem('rol');
    
     return item;
  }
}
