import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**
 * Modulos externangular material
 */
import {
  MatButtonModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatSidenavModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
  ],
  declarations: []
})
export class MaterialModule { }
