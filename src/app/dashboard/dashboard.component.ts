import { setMainlyDish, unsetMainlyDish } from './../main-system/main-system.actions';
import { AN_ERROR_HAS_OCURRED_WHEN_WAS_PROCESSED, firebaseMessages } from './../models/constants/constant';
import { AN_ERROR_HAS_OCURRED } from 'src/app/models/constants/constant';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, Observable, shareReplay, Subscription } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { ToastService } from '../services/utils/toast.service';
import { AppStateMainSystem } from '../main-system/main-system.reducer';
import { Store } from '@ngrx/store';
import { DishesService } from '../main-system/services/dishes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  name: string = '';
  billAmount: number | undefined;
  subscriptions: Subscription[] = [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private dishesService: DishesService,
    private store: Store<AppStateMainSystem>,
  ) { }

  ngOnInit(): void {
    this.listenMainSystemList();
    this.getMainlyDishToday();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.store.dispatch(unsetMainlyDish())
  }

  logoutUser() {
    this.authService.logoutUser().subscribe({
      next: () => this.router.navigate(['/auth/login']),
      error: error => this.toastService.showError({
        title: AN_ERROR_HAS_OCURRED,
        message: firebaseMessages(error.message)
      })
    });
  }

  listenMainSystemList() {
    const subscription = this.store.select('user').pipe(
      filter(({ user }) => user !== null)
    ).subscribe(
      ({ user }) => {
        if (user) {
          this.name = user.name;
        }
      }
    );
    this.subscriptions.push(subscription);
  }

  getMainlyDishToday(): void {
    const subscription = this.dishesService.getMainlyDishToday().subscribe({
      next: mainlyDish => {
        this.store.dispatch(setMainlyDish({mainlyDish}));
      },
      error: error => {
        console.warn(error);
        this.toastService.showError({
          title: AN_ERROR_HAS_OCURRED,
          message: AN_ERROR_HAS_OCURRED_WHEN_WAS_PROCESSED
        });
      }
    });
    this.subscriptions.push(subscription);
  }

}
