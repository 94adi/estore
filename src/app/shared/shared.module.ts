import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingsComponent } from './components/ratings/ratings.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RatingsComponent
  ],
  exports: [RatingsComponent]
})
export class SharedModule { }
