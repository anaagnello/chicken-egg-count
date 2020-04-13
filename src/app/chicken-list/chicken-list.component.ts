import { Component, OnInit } from '@angular/core';

import { ChickenService } from '../chicken.service';
import { Chicken } from '../chicken';

@Component({
  selector: 'chicken-list',
  templateUrl: './chicken-list.component.html',
  styleUrls: ['./chicken-list.component.css']
})
export class ChickenListComponent implements OnInit {
  chickens = Chicken[];
  constructor(
    private chickenService: ChickenService
  ) { }

  ngOnInit() {
    this.getChickens();
  }

  getChickens(): void {
    //this.chickens = ["Suzie", "goldi"];
    this.chickenService.getChickens().subscribe(chickens => this.chickens = chickens);
  }
}