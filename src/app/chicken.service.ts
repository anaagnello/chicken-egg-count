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

const chickenTransform = (rawChicken: any): Chicken => {
  return {
    chickenId: rawChicken.sys_id,
    breed: rawChicken.chicken_breed.display_value,
    name: rawChicken.chicken_name,
    birthdate: new Date(`${rawChicken.birthdate} UTC`),
    pictureUrl: rawChicken.picture.display_value,
    purchasedDate: new Date(`${rawChicken.purchased_date} UTC`),
    notes: rawChicken.chicken_notes,
  };
};

@Injectable()
export class ChickenService {

  cachedChickens;
  cachedEggCount;

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
      const chickens: Chicken[] = response.data.result;
      this.cachedChickens = {};
      chickens.forEach((chicken:any) => (this.cachedChickens[chicken.sys_id] = chickenTransform(chicken)));
      console.log(this.cachedChickens);
      return Object.values(this.cachedChickens);
    })
    .catch((error) => {
      console.error(`error: ${error}`);
    });
  }

  getEggCount() : Promise<any> {
    return instance.get('/chickens/eggcount', {method: 'get'}).then((response) => {
      console.log(response.data.result);
      return response.data.result;
    })
    .catch((error) => {
      console.error(`error: ${error}`);
    });
  }
}