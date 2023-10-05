import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  showModal: boolean = false;
  rol: any;
  

  constructor(private productosService: ProductosService,
    
    private route: ActivatedRoute,
    private router: Router,
    ){}

    productoId!: string;
    producto: any;
    
    Id: string = 'modal-1'

    ngOnInit() {
      this.productoId = this.route.snapshot.params['id'];
      
      this.obtenerProducto(this.productoId)
      this.rol = this.GetRole();
    }

   
    async obtenerProducto(id: string){
      (await this.productosService.getOneProduct(id)).subscribe(product => {
        this.producto = product
      
        
      });
    }

    editProduct(id : string){
      this.router.navigate(['/producto', id]);
    }
   
   async deleteProducto(id : string){
      try {
        (await this.productosService.deletetProducto(id));
        alert("Producto Eliminado correctamente!");
        this.router.navigate(['home']);
        
      } catch (error) {
        console.error(error);
        alert("la eliminación ha fallado");
      }
    }

    GetRole() {
      const item = window.localStorage.getItem('rol');
      return item;
    }
    
}
