import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChickenServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getChickens() {
    return this.http.get('/assets/shipping.json');
  }
}