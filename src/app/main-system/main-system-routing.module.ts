import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PopularIngredientsComponent } from './views/popular-ingredients/popular-ingredients.component';
import { DishesComponent } from './views/dishes/dishes.component';
import { DetailDishComponent } from './views/detail-dish/detail-dish.component';
import { ListDishesComponent } from './views/list-dishes/list-dishes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'popular-ingredients', component: PopularIngredientsComponent },
  { path: 'dishes', component: DishesComponent },
  { path: 'detail-dish', component: DetailDishComponent },
  { path: 'list-dishes', component: ListDishesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainSystemRoutingModule { }
