import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': '5V21n0xkveRFwlgEGkJX5nMWXlHHLiK6nHrUHMM4'
  })
};

@Injectable()
export class ChickenService {

  chickens = [];

  constructor(
    private http: HttpClient
  ) { }

  getChickens() : Observable(Chicken[]) {
    //return ["Suzie", "Goldi"];
    return this.http.get<Chicken[]>('https://qqvxvm81pd.execute-api.us-east-1.amazonaws.com/dev/chickens', httpOptions);
  }
}