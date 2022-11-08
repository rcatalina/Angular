import { Injectable } from '@angular/core';

//para que el servicio sea singleton y se comparta
@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {
    console.log('... instanciando LogService');
  }

  public info(msg: String): void {
    console.log('[INFO] ' + msg);
  }
}
