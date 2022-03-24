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
      }
    );
    this.subscriptions.push(subscription);
  }

}
