import { NgModule } from '@angular/core';
/**
 * Modulos angular material
 */
import {
  MatButtonModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatSidenavModule,
  MatRadioModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatMenuModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatTabsModule,
  MatSortModule,
  MatBadgeModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatRadioModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSortModule,
    MatBadgeModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatRadioModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSortModule,
    MatBadgeModule
  ],
  declarations: []
})
export class MaterialModule { }
