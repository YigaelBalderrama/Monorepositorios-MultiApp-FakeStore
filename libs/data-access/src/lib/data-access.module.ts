import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtlityModule } from '@fake-store/utlity';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    UtlityModule,
    HttpClientModule
  ]
})
export class DataAccessModule {}
