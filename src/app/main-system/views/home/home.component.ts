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
    this.listenStore();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  listenStore() {
    const subscription = this.store.select('mainSystem').subscribe(
      ({mainlyDish}) => {
        this.mainlyDish = mainlyDish;
      }
    );
    this.subscriptions.push(subscription);
  }

}
