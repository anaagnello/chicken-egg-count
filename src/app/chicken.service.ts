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

  cachedChickens;

  constructor(
    private http: HttpClient
  ) { }

  async getChicken(id: string) : Promise<Chicken> {
    console.log('id: ', id);
    if (!this.cachedChickens) {
      await this.getChickens();
    }
    return Promise.resolve(this.cachedChickens && this.cachedChickens[id]);
  }

  getChickens() : Promise<Chicken[]> {

    return instance.get('/chickens', {method: 'get'}).then((response) => {
      //console.log('response', response);
      const chickens: any[] = response.data.result;
      this.cachedChickens = {};
      chickens.forEach((chicken:Chicken) => (this.cachedChickens[chicken.sys_id] = chicken));
      console.log(this.cachedChickens);
      return chickens;
    })
    .catch((error) => {
      console.error(`error: ${error}`);
    });
  }
}