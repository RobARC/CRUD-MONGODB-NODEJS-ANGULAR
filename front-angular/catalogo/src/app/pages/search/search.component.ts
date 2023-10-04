import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  productos: any[] = [];
  productosFiltrado: any[] = [];

  constructor(private route: ActivatedRoute,
    public productoService: ProductosService) {}

    ngOnInit(): void {
    
      this.route.params.subscribe(params => {
        console.log(params['termino']);
  
        this.buscarProducto(params['termino'])
        
      })
      
    }

    async buscarProducto(termino: string){
      (await this.productoService.getProductos()).subscribe(resp =>{
           
        this.productos = resp;
        this.productosFiltrado = []
  
        termino = termino.toLowerCase();
  
        console.log(this.productos);
  
        this.productos.forEach(prod => {
  
          const tituloLower = prod.nombre.toLowerCase();
          if( prod.categorias.indexOf(termino) >= 0 || 
          tituloLower.indexOf(termino) >= 0 ) {
                this.productosFiltrado.push(prod);
              }
        })
        
    });
   }
}
