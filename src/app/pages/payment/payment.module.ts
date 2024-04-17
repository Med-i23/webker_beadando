import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import { PaymentComponent} from './payment.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardContent,
    MatCardActions,
    MatCard,
    MatButton,
    MatCardImage,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ]
})
export class PaymentModule { }
