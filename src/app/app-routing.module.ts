import { NgModule } from '@angular/core';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { ListaTarjetasComponent } from './components/lista-tarjetas/lista-tarjetas.component'
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'crear-tarjeta', component: TarjetaCreditoComponent },
  { path: 'listar-tarjetas', component: ListaTarjetasComponent },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
