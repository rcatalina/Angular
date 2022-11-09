import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Material
import { MatListModule } from '@angular/material/list';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { TimerComponent } from './components/timer/timer.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { PedidoComponent } from './lista-pedidos/pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaPedidosComponent,
    PedidoComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatListModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
