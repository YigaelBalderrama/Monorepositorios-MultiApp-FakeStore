import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataAccessModule } from '@fake-store/data-access';

@NgModule({
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    DataAccessModule
  ],
  declarations: [
    BarComponent, 
    ListOfProductsComponent
  ],
  exports: [
    BarComponent,
    ListOfProductsComponent,
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    DataAccessModule
  ],
})
export class StoreuiModule {}
