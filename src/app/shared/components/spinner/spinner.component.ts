import { AppStateMainSystem } from './../../../main-system/main-system.reducer';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from "ngx-spinner";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  @Input() type: string = 'square-jelly-box';
  @Input() fullScreen: boolean = true;

  subscriptions: Subscription[] = [];

  constructor(
    private spinner: NgxSpinnerService,
    private store: Store<AppStateMainSystem>
  ) { }

  ngOnInit(): void {
    this.listenStore();
  }

  ngOnDestroy(): void {
    this.spinner.hide();
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  listenStore() {
    const subscription = this.store.select('ui').subscribe(({isLoading}) => {
      if (isLoading) {
        this.showSpinner();
      } else {
        this.spinner.hide('spinner');
      }
    });
    this.subscriptions.push(subscription);
  }

  private showSpinner() {
    this.spinner.show('spinner', {
      type: this.type,
      size: "medium",
      bdColor: "rgba(0, 0, 0, 0.8)",
      color: "white",
      fullScreen: this.fullScreen
    });
  }

}
