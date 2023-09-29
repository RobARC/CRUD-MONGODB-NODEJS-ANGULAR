import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.class';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  modoEdicion: boolean = false;
  producto: Producto = new Producto(); // Objeto para almacenar los datos del producto
  checkoutForm: any;
  productoId!: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private productosServices: ProductosService)
              {this.checkoutForm = this.fb.group({
                nombre:"",
                descripcion:"",
                sku:"",
                imagen:"",
                categorias:"", 
                precio:"",
                stock:"",
              });
  

}
ngOnInit(): void {
  this.route.params.subscribe(params => {
   if(params['id'] === undefined){
     return;
   }
   this.modoEdicion = true;
   this.productoId = String(params['id']);
   this.getDataById(this.productoId.toString())
   console.log(this.modoEdicion);
   
 });
}
public async getDataById(id: string) {
  //console.log(id);
  (await this.productosServices.getOneProduct(id)).subscribe(
    (resp: any)=> {
    this.getDataForm(resp), 
    //console.log(resp);
      (error: any) => console.error(error)
  })
}
getDataForm(data: any) {
  this.checkoutForm.patchValue({
    nombre: data.nombre,
    descripcion: data.descripcion,
    sku: data.sku,
    imagen: data.imagen,
    categorias: data.categorias,
    precio: data.precio,
    stock: data.stock,
  });
  console.log(data.categorias[0]);
}
async onSubmit(){
  this.producto.nombre = this.checkoutForm.value.nombre;
  this.producto.descripcion = this.checkoutForm.value.descripcion;
  this.producto.sku= this.checkoutForm.value.sku;
  this.producto.imagen = this.checkoutForm.value.imagen;
  this.producto.categorias = this.checkoutForm.value.categorias;
  this.producto.precio = this.checkoutForm.value.precio;
  this.producto.stock = this.checkoutForm.value.stock;

  const data = this.checkoutForm.value;

  //Crear o Actualizar un producto
  if(this.modoEdicion === true)
  {   
    try {
      await this.productosServices.editProducto(this.productoId.toString(), data);
      alert("Actualización Satisfactoria!");
      this.checkoutForm.reset();
      this.router.navigate(['home']);

    } catch (error) {
      console.log(error);
      alert("La actualización ha fallado");
      this.router.navigate(['home']);
    }

  }else {
    try 
    {
      await this.productosServices.ProductoPost(data);
      alert("Registro satisfactorio!");
      this.router.navigate(['home']);

    } catch (error) {
      console.log(error);
      alert("El registro ha fallado");
      this.router.navigate(['home']);
    }
      this.checkoutForm.reset();
    }

}

}

