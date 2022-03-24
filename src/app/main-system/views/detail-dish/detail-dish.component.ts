import { MealModel } from './../../../models/meal.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppStateMainSystem } from '../../main-system.reducer';

@Component({
  selector: 'app-detail-dish',
  templateUrl: './detail-dish.component.html',
  styleUrls: ['./detail-dish.component.scss']
})
export class DetailDishComponent implements OnInit {

  dish: MealModel | null = null;
  ingredients: string[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private store: Store<AppStateMainSystem>
  ) { }

  ngOnInit(): void {
    this.listenStore();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  listenStore() {
    const subscription = this.store.select('mainSystem').subscribe(
      ({mainlyDish}) => {
        this.dish = mainlyDish;
        this.buildIngredientList();
      }
    );
    this.subscriptions.push(subscription);
  }

  buildIngredientList() {
    if (this.dish) {
      for (let index: number = 1; index <= 20; index++) {
        const key = `strIngredient${index}` as keyof typeof this.dish;
        const ingredient = this.dish[key] ? this.dish[key] : null;
        if (ingredient) {
          this.ingredients.push(ingredient)
        }
      }
    }
  }

}
