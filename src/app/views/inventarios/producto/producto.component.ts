import { ProductoService } from './../services/producto.service';
import { ProductoModel } from './../models/producto.model';
import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ReactiveFormsModule, FormsModule, FormDirective, FormSelectDirective, FormLabelDirective, FormControlDirective,  ButtonDirective, NgStyle, TextColorDirective, TableDirective, TableColorDirective, TableActiveDirective],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
listaProductos : ProductoModel[] = [];
constructor(private productoService: ProductoService){

this.getProductos();

}

getProductos(){
  this.productoService.getProductos().subscribe({
    next : (respuesta) => {
      console.log(respuesta);
      this.listaProductos = respuesta;
    },
    error: (error)=> {
      console.log(error);
    }
  })
  
}


}
