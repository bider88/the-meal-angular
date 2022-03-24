import { MealModel } from './../../../models/meal.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() dish: MealModel| null = null;
  // @Input() title: string = '';
  // @Input() subTitle: string = '';
  // @Input() image: string = 'assets/images/not-image.jpg';
  // @Input() video: string = '';
  @Input() ingredients: string[] = [];
  @Input() detail: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
