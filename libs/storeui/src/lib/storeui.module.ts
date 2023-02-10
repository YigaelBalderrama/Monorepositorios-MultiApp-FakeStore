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
import { LoginFormComponent } from './login-form/login-form.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    DataAccessModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BarComponent, ListOfProductsComponent, LoginFormComponent],
  exports: [
    BarComponent,
    ListOfProductsComponent,
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    DataAccessModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class StoreuiModule {}
