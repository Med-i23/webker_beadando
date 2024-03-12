import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcertRoutingModule } from './concert-routing.module';
import { ConcertComponent } from './concert.component';


@NgModule({
  declarations: [
    ConcertComponent
  ],
  imports: [
    CommonModule,
    ConcertRoutingModule
  ]
})
export class ConcertModule { }
