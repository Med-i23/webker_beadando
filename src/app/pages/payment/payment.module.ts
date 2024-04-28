import { NgModule } from '@angular/core';
import {FormsModule, NgControl} from '@angular/forms';
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
    MatInputModule,
    FormsModule
  ]
})
export class PaymentModule { }
