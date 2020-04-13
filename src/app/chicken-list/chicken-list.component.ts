import { Component, OnInit } from '@angular/core';

import { ChickenService } from '../chicken.service';

@Component({
  selector: 'chicken-list',
  templateUrl: './chicken-list.component.html',
  styleUrls: ['./chicken-list.component.css']
})
export class ChickenListComponent implements OnInit {
  chickens;
  constructor(
    private chickenService: ChickenService
  ) { }

  ngOnInit() {
    this.chickens = ["Suzie", "goldi"];
    //this.chickens = this.chickenService.getChickens();
  }
  share() {
    window.alert('The product has been shared!');
  }
}