import {Component, OnInit} from '@angular/core';
import {PaymentService} from "../../shared/services/payment.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ThankYouComponent} from "../thank-you/thank-you.component";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit{
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
  cancel(): void {
    this.dialogRef.close();
  }

  pay(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(ThankYouComponent, {
      width: '400px',
      disableClose: true
    });
  }

}
