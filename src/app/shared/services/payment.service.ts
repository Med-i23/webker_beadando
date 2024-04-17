import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {PaymentComponent} from "../../pages/payment/payment.component";
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private dialog: MatDialog) { }

  openPaymentDialog(): void {
    this.dialog.open(PaymentComponent, {
      width: '400px',
      disableClose: true
    });
  }
}
