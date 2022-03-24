import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MealModel } from 'src/app/models/meal.model';
import { AppStateMainSystem } from '../../main-system.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  mainlyDish: MealModel | null = null;
  ingredients: string[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private store: Store<AppStateMainSystem>
  ) { }

  ngOnInit(): void {
    this.listeStore();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  listeStore() {
    const subscription = this.store.select('mainSystem').subscribe(
      ({mainlyDish}) => {
        this.mainlyDish = mainlyDish;
        this.buildIngredientList();
      }
    );
    this.subscriptions.push(subscription);
  }

  buildIngredientList() {
    if (this.mainlyDish) {
      for (let index: number = 1; index <= 20; index++) {
        const key = `strIngredient${index}` as keyof typeof this.mainlyDish;
        const ingredient = this.mainlyDish[key] ? this.mainlyDish[key] : null;
        if (ingredient) {
          this.ingredients.push(ingredient)
        }
      }
    }
  }

}
