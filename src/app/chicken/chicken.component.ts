import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ChickenService } from '../chicken.service';
import { Chicken } from '../chicken';
@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.css']
})
export class ChickenComponent implements OnInit {

  @Input() chicken: Chicken;

  constructor(
    private route: ActivatedRoute,
    private chickenService: ChickenService,
    private location: Location) { }

  ngOnInit() {
    this.getChicken();
  }

  async getChicken(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    this.chicken = await this.chickenService.getChicken(id as string);
  }

  goBack(): void {
    this.location.back();
  }
}