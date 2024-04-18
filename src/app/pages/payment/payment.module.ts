import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton, MatButtonModule} from "@angular/material/button";
import { PaymentComponent} from './payment.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import { MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    MatCardContent,
    MatCardActions,
    MatCard,
    MatButton,
    MatCardImage,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class PaymentModule { }
