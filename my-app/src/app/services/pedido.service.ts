import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private pedidos: Pedido[] = [];

  constructor() {}

  add(p: Pedido) {}

  update(p: Pedido) {}

  delete(id: number) {}

  find(id: number) {}

  findAll() {
    return this.pedidos;
  }
}
