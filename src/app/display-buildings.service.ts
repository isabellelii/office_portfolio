import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { BUILDINGS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DisplayBuildingsService {

  constructor() { }

  getBuildings(): Observable<any[]>{
    return Observable.of(BUILDINGS).delay(100);
  }

  getColumns(): string[]{
    return ["building", "size", "usage", "capacity"]
  };
}
