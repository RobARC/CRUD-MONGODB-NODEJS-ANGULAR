export interface IProducto {
    id: string; 
    nombre: string;
    descripcion: string;
    sku: string;
    imagen: string;
    categorias: string[]; 
    precio: number;
    stock: number;
}