import { Routes } from '@angular/router';
export const routes: Routes = [
{    
    path: '',
    data: {
      title: 'Base'
},
children: [
    {
      path: '',
      redirectTo: 'cards',
      pathMatch: 'full'
    },
    {
      path: 'producto',
      loadComponent: () => import('./producto/producto.component').then(m => m.ProductoComponent),
      data: {
        title: 'Producto'
      }
    },
    {
      path: 'reportes',
      loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
      data: {
        title: 'Reportes'
      }
    },

]
}  
]