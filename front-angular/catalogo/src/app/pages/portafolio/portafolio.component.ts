import { Component } from '@angular/core';
import { ProductosService } from '../../service/productos.service';
import { Router } from '@angular/router';
import {ScanPipe } from 'ngx-pipes';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  productos:any[] = []
  page!:number;

  constructor(private productosService: ProductosService,
              private router: Router){}

  ngOnInit() {
   this.obtenerProductos();
  }

  async obtenerProductos(){
    (await this.productosService.getProductos()).subscribe((productos: any) => {
      this.productos = productos
      //console.log(this.productos)
    });
  }

  productoDetalle(id : string){
    this.router.navigate(['/item', id]);
  }
}
