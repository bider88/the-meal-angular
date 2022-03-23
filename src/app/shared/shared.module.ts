import { CommonsModule } from './../commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    CommonsModule
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SharedModule { }
