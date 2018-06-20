import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Kpop } from './kpop.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KpopHttpService {

  constructor(private http: Http) { }

  getIdols(): Promise<any> {
    return this.http.get('./assets/server/kpop.json')
      .toPromise();
  }
}
