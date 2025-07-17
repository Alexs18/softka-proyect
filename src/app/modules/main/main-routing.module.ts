import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from 'src/app/components/formulario/formulario.component';
import { ProductosComponent } from 'src/app/components/productos/productos.component';


const routes: Routes = [
  { 
    path: 'formulario',
    component:FormularioComponent
  },
  { 
    path: 'productos',
    component:ProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
