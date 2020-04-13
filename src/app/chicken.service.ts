import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChickenService {

  chickens = [];

  constructor(
    private http: HttpClient
  ) { }

  getChickens() {
    //return ["Suzie", "Goldi"];
    return this.http.get('https://qqvxvm81pd.execute-api.us-east-1.amazonaws.com/dev/chickens');
  }
}