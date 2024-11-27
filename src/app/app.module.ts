import { NgModule } from '@angular/core';

import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component'
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListaTarjetasComponent } from './components/lista-tarjetas/lista-tarjetas.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
      AppComponent,
      TarjetaCreditoComponent,
      ListarProductosComponent,
      CrearProductoComponent,
      ListaTarjetasComponent,
      LoginComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule, // Asegúrate de incluirlo aquí
      BrowserAnimationsModule,
      ReactiveFormsModule,
      ToastrModule
    ],
    providers: [ provideHttpClient(withInterceptorsFromDi())],
    bootstrap: [AppComponent]
  })
  export class AppModule { }