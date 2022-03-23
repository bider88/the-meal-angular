import { firebaseMessages } from './../../../models/constants/constant';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AN_ERROR_HAS_OCURRED } from 'src/app/models/constants/constant';
import { UserModel } from 'src/app/models/user.model';
import { ToastService } from 'src/app/services/utils/toast.service';
import { AuthService } from '../../services/auth.service';
import * as ui from '../../../shared/ui.actions';
import { Store } from '@ngrx/store';
import { AppStateMainSystem } from './../../../main-system/main-system.reducer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  authForm: FormGroup =  this.fb.group({
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required]
  });
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

  authUser(): void {
    if (this.authForm.valid) {
      this.store.dispatch(ui.isLoading());
      const user: UserModel = { ...this.authForm.value } as UserModel;
      const subscription = this.authService.createUser(user).subscribe({
        next: () => this.router.navigate(['/']),
        error: error => this.toastService.showError({
          title: AN_ERROR_HAS_OCURRED,
          message: firebaseMessages(error)
        }),
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
