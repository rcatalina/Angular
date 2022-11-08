import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
})
export class CabeceraComponent implements OnInit {
  title: string = 'Gestión de pedidos';
  msg: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  onClickAdd(): void {
    console.log('ajkdhwadljkwagdjwad');

    this.msg = 'Pedido realizado';
  }
}
