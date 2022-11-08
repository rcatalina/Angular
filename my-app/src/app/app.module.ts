import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Material
import { MatListModule } from '@angular/material/list';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { PedidoComponent } from './lista-pedidos/pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaPedidosComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
