import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorObserver, Subscription } from 'rxjs';
import { Pedido } from '../model/pedido';
import { PedidosHttpService } from './../services/pedidos/pedidos-http.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
})
export class CabeceraComponent implements OnInit, OnDestroy {
  title: string = 'Gestión de pedidos';
  msg: string | undefined;
  pedidos!: Pedido[];
  subscriptionFindAll: Subscription;
  subscriptionDelete!: Subscription;

  constructor(private dataService: PedidosHttpService) {
    // OJO! llama al findAll() aqui mismo (ya se ha hecho la llamada AJAX al servidor!)
    this.subscriptionFindAll = dataService
      .findAll()
      .subscribe((result: Pedido[]) => {
        this.pedidos = result;
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptionFindAll.unsubscribe();
    this.subscriptionDelete?.unsubscribe();
  }

  onClickAdd(): void {
    console.log('ajkdhwadljkwagdjwad');

    this.msg = 'Pedido realizado';
  }

  onClickFindAll(): void {}

  onClickDelete(id: number): void {
    const errorObserver: ErrorObserver<string> = {
      error: (err: Error) => console.error(`[errorObserver] error`, err),
    };

    this.subscriptionDelete = this.dataService
      .deleteById(id)
      .subscribe(errorObserver);
  }
}
