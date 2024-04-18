import {Component, OnInit} from '@angular/core';
import {PaymentService} from "../../shared/services/payment.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ThankYouComponent} from "../thank-you/thank-you.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit{
  paymentForm!: FormGroup;
  constructor(private dialogRef: MatDialogRef<PaymentComponent>, private dialog: MatDialog, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      expirationDate: ['', Validators.required],
      cvv: ['', Validators.required],
      nameOnCard: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required]
    });
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
