import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
<<<<<<< HEAD
import {PaymentComponent} from "./payment.component";


const routes: Routes = [{ path: '', component: PaymentComponent }];
=======
import {SignupComponent} from "../signup/signup.component";
import {PaymentComponent} from "./payment.component";

const routes: Routes = [{ path: '', component: PaymentComponent }];


>>>>>>> origin/main
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
