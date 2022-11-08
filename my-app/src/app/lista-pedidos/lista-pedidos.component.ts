import { Component, OnInit } from '@angular/core';
import { Pedido } from './../model/pedido';
import { LogService } from './../services/log.service';
import { PedidoService } from './../services/pedido.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css'],
})
export class ListaPedidosComponent implements OnInit {
  pedidos: Pedido[] = [];

  constructor(private log: LogService, private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidos = this.pedidoService.findAll();
  }
}
