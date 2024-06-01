import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductoModel } from '../models/producto.model';
@Injectable({
    providedIn :'root'
})
export class ProductoService {
    private API_URL = 'http://localhost:5500/inventarios'
    constructor(private http: HttpClient){

    }
    getProductos ():Observable<ProductoModel[]>{
        console.log(this.API_URL);
        return this.http.get<ProductoModel[]>(`${this.API_URL}/traerInventario`);
    }

    agregarProducto(producto: ProductoModel) : Observable<ProductoModel>{
        return this.http.post<ProductoModel>(`${this.API_URL}/agregar`, producto)
    }
    editarProducto(producto: ProductoModel) : Observable<ProductoModel> {
        return this.http.put<ProductoModel>(`${this.API_URL}/editar/${producto._id}`, producto);
      }
    eliminarProducto(idProducto : string) : Observable<ProductoModel> {
        console.log(idProducto);
        // return this.http.delete<ProductoModel>(`${this.API_URL}/eliminar/${idProducto}`);
        return this.http.delete<ProductoModel>(this.API_URL+'/eliminar/'+idProducto);
    
      }
}