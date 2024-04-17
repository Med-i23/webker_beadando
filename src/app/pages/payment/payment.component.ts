import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ThankYouComponent } from '../thank-you/thank-you.component';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentForm = new FormGroup({
    cardNumber: new FormControl(''),
    expirationDate: new FormControl(''),
    cvv: new FormControl(''),
    nameOnCard: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl('')
  });

  constructor(private dialogRef: MatDialogRef<PaymentComponent>, private dialog: MatDialog, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }
    this.dialogRef.close();
    const dialogRef = this.dialog.open(ThankYouComponent, {
      width: '400px',
      disableClose: true
    });
  }
  cancel(): void {
    this.dialogRef.close();
  }

  pay(): void {
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }
    this.dialogRef.close();
    const dialogRef = this.dialog.open(ThankYouComponent, {
      width: '400px',
      disableClose: true
    });
  }


}
