import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule, MatCardModule, MatCheckboxModule, MatButtonModule, MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSelectModule,
  MatTabsModule,
  MatSnackBarModule,
  MatMenuModule,
  MatTooltipModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatSnackBarModule,
    MatMenuModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatSnackBarModule,
    MatMenuModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
