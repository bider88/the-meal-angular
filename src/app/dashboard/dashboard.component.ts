import { firebaseMessages } from './../models/constants/constant';
import { AN_ERROR_HAS_OCURRED } from 'src/app/models/constants/constant';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, Observable, shareReplay, Subscription } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { ToastService } from '../services/utils/toast.service';
import { UserModel } from '../models/user.model';
import { AppStateMainSystem } from '../main-system/main-system.reducer';
import { Store } from '@ngrx/store';

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
    private store: Store<AppStateMainSystem>,
  ) { }

  ngOnInit(): void {
    this.listenMainSystemList();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
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

}
