import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PopularIngredientsComponent } from './views/popular-ingredients/popular-ingredients.component';
import { AccountComponent } from './views/account/account.component';
import { DishesComponent } from './views/dishes/dishes.component';
import { DetailDishComponent } from './views/detail-dish/detail-dish.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'popular-ingredients', component: PopularIngredientsComponent },
  { path: 'dishes', component: DishesComponent },
  { path: 'account', component: AccountComponent },
  { path: 'detail-dish', component: DetailDishComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainSystemRoutingModule { }
