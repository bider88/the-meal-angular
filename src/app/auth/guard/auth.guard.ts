import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canLoad(): Observable<boolean> {
    return this.authService.isAuth().pipe(
      tap(state => {
        if (!state) {
          this.router.navigate(['/auth/signin']);
        }
      }),
      take(1)
    );
  }

  canActivate(): Observable<boolean> {
    return this.authService.isAuth().pipe(
      tap(state => {
        if (!state) {
          this.router.navigate(['/auth/signin']);
        }
      })
    );
  }

}
