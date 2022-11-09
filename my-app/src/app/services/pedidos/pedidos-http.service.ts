import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/model/pedido';

@Injectable({
  providedIn: 'root',
})
export class PedidosHttpService {
  constructor(private http: HttpClient) {}

  private urlSource: string = 'https://localhost:4200';

  // get all
  public findAll(): Observable<Pedido[]> {
    const url = this.urlSource + '/pedidos';

    return this.http?.get<Pedido[]>(url);
  }

  // get by id
  public findById(id: number): Observable<Pedido> {
    const url = this.urlSource + '/pedidos/' + id;

    return this.http?.get<Pedido>(url);
  }

  // add
  public add(p: Pedido): Observable<Pedido> {
    const url = this.urlSource + '/pedidos';

    return this.http?.post<Pedido>(url, p);
  }

  // update
  public update(p: Pedido): Observable<Pedido> {
    const url = this.urlSource + '/pedidos';

    return this.http?.put<Pedido>(url, p);
  }

  // delete
  public deleteById(id: number): Observable<never> {
    const url = this.urlSource + '/pedidos/' + id;

    return this.http?.delete<never>(url);
  }
}
