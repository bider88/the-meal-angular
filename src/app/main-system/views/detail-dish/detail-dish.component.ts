import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MealModel } from './../../../models/meal.model';
import { AppStateMainSystem } from '../../main-system.reducer';
import { DishesService } from './../../services/dishes.service';

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
    private dishesService: DishesService,
    private store: Store<AppStateMainSystem>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getQueryParam();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  getQueryParam(): void {
    this.route.queryParams.subscribe({
      next: ({dish}: any) => {
        if (dish) {
          this.dishesService.searchDish(dish).subscribe({
            next: dish => this.dish = dish
          });
        } else {
          this.listenStore();
        }
      }
    });
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
