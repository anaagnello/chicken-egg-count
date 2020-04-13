import { Component, OnInit } from '@angular/core';

import { ChickenService } from '../chicken.service';
import { Chicken } from '../chicken';

@Component({
  selector: 'chicken-list',
  templateUrl: './chicken-list.component.html',
  styleUrls: ['./chicken-list.component.css']
})
export class ChickenListComponent implements OnInit {
  chickens: Chicken[];
  eggCount: number;
  loading: boolean;

  constructor(
    private chickenService: ChickenService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.getChickens();
    this.getEggCount();
  }

  async getChickens(): Promise<void> {
    this.chickens = await this.chickenService.getChickens();
    
  }

  async getEggCount(): Promise<void> {
    this.eggCount = await this.chickenService.getEggCount();
    this.loading = false;
  }
}