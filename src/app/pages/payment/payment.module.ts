import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import { PaymentComponent} from './payment.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardContent,
    MatCardActions,
    MatCard,
    MatButton,
    MatCardImage
  ]
})
export class PaymentModule { }
