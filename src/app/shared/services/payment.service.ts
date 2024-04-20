import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {PaymentComponent} from "../../pages/payment/payment.component";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  title: string = "";

  constructor(private dialog: MatDialog) { }


    openPaymentDialog(title: string): void {
    this.title = title;
    this.dialog.open(PaymentComponent, {
      width: '400px',
      disableClose: true
    });
  }
}
