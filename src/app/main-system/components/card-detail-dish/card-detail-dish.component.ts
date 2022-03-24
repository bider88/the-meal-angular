import { MealModel } from 'src/app/models/meal.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-detail-dish',
  templateUrl: './card-detail-dish.component.html',
  styleUrls: ['./card-detail-dish.component.scss']
})
export class CardDetailDishComponent {

  @Input() dish: MealModel| null = null;
  @Input() detail: boolean = false;

}
