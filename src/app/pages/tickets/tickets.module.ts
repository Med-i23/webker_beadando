import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketsComponent} from "./tickets.component";
import {MatCard, MatCardContent} from "@angular/material/card";
import {TicketsRoutingModule} from "./tickets-routing.module";
import {AppModule} from "../../app.module";
import {RouterModule} from "@angular/router";
import {DateFormatPipe} from "../../shared/pipes/date-format.pipe";



@NgModule({
  declarations: [
    TicketsComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    MatCardContent,
    MatCard,
    TicketsRoutingModule,
    RouterModule
  ]
})
export class TicketsModule { }
