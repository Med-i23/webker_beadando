import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcertRoutingModule } from './concert-routing.module';
import { ConcertComponent } from './concert.component';
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";


@NgModule({
  declarations: [
    ConcertComponent
  ],
  imports: [
    CommonModule,
    ConcertRoutingModule,
    MatCardContent,
    MatCardActions,
    MatCard,
    MatButton,
    MatCardImage
  ]
})
export class ConcertModule { }
