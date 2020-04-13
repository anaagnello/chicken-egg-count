import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Chicken } from './chicken';
const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'https://qqvxvm81pd.execute-api.us-east-1.amazonaws.com/dev',
  headers: {'x-api-key': '5V21n0xkveRFwlgEGkJX5nMWXlHHLiK6nHrUHMM4'}
});

@Injectable()
export class ChickenService {

  chickens = [];

  constructor(
    private http: HttpClient
  ) { }

  getChickens() : Promise<Chicken[]> {

    return instance.get('/chickens', {method: 'get'}).then((response) => {
      return response.result
    })
    .catch((error) => {
      console.error(`error: ${error}`);
    });
  }
}