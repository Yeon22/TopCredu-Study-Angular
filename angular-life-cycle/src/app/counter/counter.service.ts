import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CounterBridgeService {

  private subject = new Subject<any>();

  constructor() { }

  incremnet() {
    this.subject.next({ type: 'incremnet' });
  }

  decrement() {
    this.subject.next({ type: 'decrement' });
  }

  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }
}
