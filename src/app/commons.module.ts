import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

import { NgxSpinnerModule } from "ngx-spinner";

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatTooltipModule
];

const commonModules = [
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  NgxSpinnerModule
];

@NgModule({
  imports: [
    ...materialModules,
    ...commonModules
  ],
  exports: [
    ...materialModules,
    ...commonModules
  ]
})
export class CommonsModule { }