import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../models/producto.model';
import { Producto } from '../models/producto.class';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  @Output() triggerData: EventEmitter<any> = new EventEmitter();

  private baseUrl = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  async getProductos(): Promise<Observable<Producto[]>>{
    return  await this.http.get<any>(`${this.baseUrl}/productos`)
  }

  async getOneProduct(id: string){
    return await this.http.get<IProducto>(`${this.baseUrl}/${id}`);
  }
  
  async ProductoPost(data: IProducto){
    return await this.http.post(`${this.baseUrl}/productos`, data,).subscribe();
  } 
  
  async editProducto(id: string, data: IProducto ){
   return  await this.http.put<any>(`${this.baseUrl}/producto/${id}`, data).subscribe();
 }

 async deletetProducto(id: string){
  console.log(id);
  return  await this.http.delete<any>(`${this.baseUrl}/producto/${id}`).subscribe();
}



}
