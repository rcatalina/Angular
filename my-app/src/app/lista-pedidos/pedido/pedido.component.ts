import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from './../../model/pedido';
import { LogService } from './../../services/log.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
  providers: [LogService],
})
export class PedidoComponent implements OnInit {
  constructor(private log: LogService, private router: Router) {}

  pedido: Pedido | undefined;

  ngOnInit(): void {}

  onAltaPedido(p: Pedido | undefined): void {
    this.router.navigate(['/pedido/alta']);
  }
}
