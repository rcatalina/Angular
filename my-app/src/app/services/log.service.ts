import { Injectable } from '@angular/core';

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
