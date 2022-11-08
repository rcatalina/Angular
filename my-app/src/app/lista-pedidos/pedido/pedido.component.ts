import { Component, OnInit } from '@angular/core';
import { LogService } from './../../services/log.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
  providers: [LogService],
})
export class PedidoComponent implements OnInit {
  constructor(private log: LogService) {}

  ngOnInit(): void {}
}
