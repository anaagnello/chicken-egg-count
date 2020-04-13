import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'chicken-list',
  templateUrl: './chicken-list.component.html',
  styleUrls: ['./chicken-list.component.css']
})
export class ChickenListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}