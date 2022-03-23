import { AN_ERROR_HAS_OCURRED, firebaseMessages } from './../../../models/constants/constant';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserModel } from './../../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { ToastService } from './../../../services/utils/toast.service';
import * as ui from '../../../shared/ui.actions';
import { Store } from '@ngrx/store';
import { AppStateMainSystem } from './../../../main-system/main-system.reducer';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  authForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required]
  });
  loading = false;
  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private store: Store<AppStateMainSystem>
  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  authUser(): void {
    if (this.authForm.valid) {
      this.store.dispatch(ui.isLoading());
      const user: UserModel = { ...this.authForm.value } as UserModel;
      const subscription = this.authService.loginUser(user).subscribe({
        next: () => this.router.navigate(['/']),
        error: error => {
          this.toastService.showError({
            title: AN_ERROR_HAS_OCURRED,
            message: firebaseMessages(error)
          });
          this.stopLoading();
        },
        complete: () => this.stopLoading()
      });
      this.subscriptions.push(subscription);
    }
  }

  isValidFormControlName(control: string): boolean {
    return !!(this.authForm.get(control)?.invalid && this.authForm.get(control)?.touched);
  }

  stopLoading(): void {
    this.store.dispatch(ui.stopLoading());
  }

}
