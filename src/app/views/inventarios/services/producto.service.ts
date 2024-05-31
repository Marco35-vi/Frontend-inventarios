import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductoModel } from '../models/producto.model';
@Injectable({
    providedIn :'root'
})
export class ProductoService {
    private API_URL = 'http://localhost:6000/inventarios'
    constructor(private http: HttpClient){

    }
    getProductos ():Observable<ProductoModel[]>{
        return this.http.get<ProductoModel[]>('${this.API_URL}/traerInventario');
    }
}