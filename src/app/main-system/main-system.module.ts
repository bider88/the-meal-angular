import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainSystemRoutingModule } from './main-system-routing.module';
import { HomeComponent } from './views/home/home.component';
import { PopularIngredientsComponent } from './views/popular-ingredients/popular-ingredients.component';
import { DishesComponent } from './views/dishes/dishes.component';
import { AccountComponent } from './views/account/account.component';
import { CommonsModule } from '../commons.module';

import { StoreModule } from '@ngrx/store';
import { mainSystemReducer } from './main-system.reducer';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { EmbedUrlYtPipe } from './pipes/embed-url-yt.pipe';
import { DetailDishComponent } from './views/detail-dish/detail-dish.component';
import { CardDetailDishComponent } from './components/card-detail-dish/card-detail-dish.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    PopularIngredientsComponent,
    DishesComponent,
    AccountComponent,
    SafeUrlPipe,
    EmbedUrlYtPipe,
    DetailDishComponent,
    CardDetailDishComponent,
    CardDetailComponent
  ],
  imports: [
    CommonModule,
    CommonsModule,
    StoreModule.forFeature('mainSystem', mainSystemReducer),
    MainSystemRoutingModule
  ]
})
export class MainSystemModule { }
