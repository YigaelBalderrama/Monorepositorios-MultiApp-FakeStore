import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [BarComponent],
  exports:[
    BarComponent
  ]
})
export class StoreuiModule {}
